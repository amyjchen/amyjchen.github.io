import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import skills, { Skill } from "../../data/skills";
import experiences, { Experience } from "../../data/experiences";
import { dedupeSkills } from "../ResumePage/ExperienceCard";
import projects, { Project } from "../../data/projects";

const LENGTH_THRESHOLD = 45;
const MIN_EXPERIENCE_LENGTH = 3;

enum MODES {
  // 1. minimize bullets in chrono backward order
  // 2. hide bullets in chrono backward order
  // 3. hide projects in chrono backward order
  // 4. hide experience in chrono backward order
  MINIMIZE,
  HIDE_BULLETS,
  HIDE_PROJECTS,
  HIDE_EXPERIENCES,
};

type State = {
  selectAll: () => void,
  clearAll: () => void,
  isSelectedSkill: (s: Skill) => boolean,
  selectedSkills: Skill[],
  resumeSkills: Skill[],
  selectedProjects: Project[],
  selectedExperiences: Experience[],
  filteredExperiences: Experience[],
  filteredProjects: Project[],
  toggleSkill: (s: Skill) => void,
  hideDeselected: boolean,
  setHideDeselected: (b: boolean) => void,
  toggleExperience: (e: Experience) => void,
  toggleProject: (p: Project) => void,
  allClear: boolean,
  loading: boolean,
  hidden: { [key: string]: 'min_bullets' | 'hide_bullets' | 'hide' },
}

const initialState: State = {
  selectAll: () => undefined,
  clearAll: () => undefined,
  isSelectedSkill: () => false,
  selectedSkills: [],
  resumeSkills: [],
  selectedProjects: [],
  selectedExperiences: [],
  filteredExperiences: [],
  filteredProjects: [],
  toggleSkill: () => undefined,
  hideDeselected: false,
  setHideDeselected: () => undefined,
  toggleExperience: () => undefined,
  toggleProject: () => undefined,
  allClear: false,
  loading: false,
  hidden: {},
}

export const ResumeContext = createContext(initialState);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [hideDeselected, setHideDeselected] = useState(false);

  const [selectedSkills, setSelectedSkills] = useState(Object.values(skills));
  const [selectedExperiences, setSelectedExperiences] = useState(experiences);
  const [selectedProjects, setSelectedProjects] = useState(projects);
  const [hidden, setHidden] = useState<{ [key: string]: 'min_bullets' | 'hide_bullets' | 'hide' }>({});

  const isSelectedSkill = (s: Skill) => !selectedSkills.includes(s);

  const toggleSkill = (s: Skill) => {
    setLoading(true);
    let newSkills: Skill[];
    if (selectedSkills.includes(s)) {
      newSkills = selectedSkills.filter((skill) => skill !== s);
    } else {
      newSkills = [...selectedSkills, s];
    }
    setSelectedSkills(newSkills);

    setSelectedExperiences(experiences.filter((e) => {
      const experienceSkills = dedupeSkills(e.bullets, e.skills);
      if (!experienceSkills.includes(s)) {
        return selectedExperiences.includes(e);
      }
      return experienceSkills.some((sk) => newSkills.includes(sk));
    }).sort((a, b) => ((b.end_date ? b.end_date.valueOf() : Date.now()) - (a.end_date ? a.end_date.valueOf() : Date.now()))));

    setSelectedProjects(projects.filter((p) => {
      if (!p.skills?.includes(s)) return selectedProjects.includes(p);
      return p.skills?.some((sk) => newSkills.includes(sk))
    }).sort((a, b) => ((b.completion_date ? b.completion_date.valueOf() : Date.now()) - (a.completion_date ? a.completion_date.valueOf() : Date.now()))));
    setTimeout(() => setLoading(false), 500);
  }

  const toggleExperience = (e: Experience) => {
    setLoading(true);
    if (selectedExperiences.includes(e)) {
      setSelectedExperiences(selectedExperiences.filter((exp) => exp !== e));
    } else {
      setSelectedExperiences([...selectedExperiences, e].sort((a, b) => ((b.end_date ? b.end_date.valueOf() : Date.now()) - (a.end_date ? a.end_date.valueOf() : Date.now()))))
    }
    setTimeout(() => setLoading(false), 500);
  };

  const toggleProject = (p: Project) => {
    setLoading(true);
    if (selectedProjects.includes(p)) {
      setSelectedProjects(selectedProjects.filter((proj) => proj !== p));
    } else {
      setSelectedProjects([...selectedProjects, p].sort((a, b) => ((b.completion_date ? b.completion_date.valueOf() : Date.now()) - (a.completion_date ? a.completion_date.valueOf() : Date.now()))))
    }
    setTimeout(() => setLoading(false), 500);
  };

  const filteredExperiences = hideDeselected ? selectedExperiences : selectedExperiences.concat(experiences.filter((e) => !selectedExperiences.includes(e)));
  const filteredProjects = hideDeselected ? selectedProjects : selectedProjects.concat(projects.filter((p) => !selectedProjects.includes(p)));
  const otherSkills = selectedExperiences.reduce((acc: Skill[], curr) => {
    return acc.concat(dedupeSkills(curr.bullets, curr.skills));
  }, []).concat(selectedProjects.reduce((acc: Skill[], curr) => {
    return acc.concat(curr.skills || []);
  }, []));

  const resumeSkills = selectedSkills.concat(otherSkills).filter((value, index, self) => self.indexOf(value) === index);

  const selectAll = () => {
    setLoading(true);
    setSelectedSkills(Object.values(skills));
    setSelectedExperiences(experiences);
    setSelectedProjects(projects);
    setTimeout(() => setLoading(false), 500);
  };

  const clearAll = () => {
    setLoading(true);
    setSelectedSkills([]);
    setSelectedExperiences([]);
    setSelectedProjects([]);
    setTimeout(() => setLoading(false), 500);
  }

  useEffect(() => {
    setLoading(true);
    // figure out hidden ones
    const explines = selectedExperiences.reduce((prev, e) => prev + e.lengths.full_length, 0);
    const projlines = selectedProjects.reduce((prev, p) => prev + p.lengths.full_length, 0);

    let lines = explines + projlines;
    let expIdx = selectedExperiences.length - 1;
    let projIdx = selectedProjects.length - 1;
    let mode: MODES = MODES.MINIMIZE;

    let nextHidden: { [key: string]: 'min_bullets' | 'hide_bullets' | 'hide' } = {};

    // 1. minimize bullets in chrono backward order
    // 2. hide bullets in chrono backward order
    // 3. hide projects in chrono backward order
    // 4. hide experience in chrono backward order
    while (lines > LENGTH_THRESHOLD) {
      switch (mode) {
        case MODES.MINIMIZE:
          nextHidden[selectedExperiences[expIdx].key] = 'min_bullets';
          lines = lines - selectedExperiences[expIdx].lengths.full_length + selectedExperiences[expIdx].lengths.short_length;
          expIdx--;
          if (expIdx === 0) {
            expIdx = selectedExperiences.length - 1;
            mode = MODES.HIDE_BULLETS;
            break;
          }
          break;
        case MODES.HIDE_BULLETS:
          nextHidden[selectedExperiences[expIdx].key] = 'hide_bullets';
          lines = lines - selectedExperiences[expIdx].lengths.short_length + MIN_EXPERIENCE_LENGTH;
          expIdx--;
          if (expIdx === 0) {
            expIdx = selectedExperiences.length - 1;
            mode = MODES.HIDE_PROJECTS;
            break;
          }
          break;
        case MODES.HIDE_PROJECTS:
          nextHidden[selectedProjects[projIdx].key] = 'hide';
          lines = lines - selectedProjects[projIdx].lengths.full_length;
          projIdx--;
          if (projIdx === 0) {
            mode = MODES.HIDE_EXPERIENCES;
            break;
          }
          break;
        case MODES.HIDE_EXPERIENCES:
          nextHidden[selectedExperiences[expIdx].key] = 'hide';
          lines = lines - MIN_EXPERIENCE_LENGTH;
          expIdx--;
          break;
        default:
          // avoid infinite loop
          lines = lines - 1;
          break;
      }
      console.log(explines, projlines, lines);
    }
    console.log(nextHidden);
    setHidden(nextHidden);
    setTimeout(() => setLoading(false), 500);
  }, [selectedExperiences, selectedProjects]);

  const allClear = !selectedSkills.length && !selectedExperiences.length && !selectedProjects.length;

  return (
    <ResumeContext.Provider
      value={{
        clearAll,
        selectAll,
        isSelectedSkill,
        selectedSkills,
        resumeSkills,
        toggleSkill,
        selectedProjects,
        selectedExperiences,
        filteredExperiences,
        filteredProjects,
        hideDeselected,
        setHideDeselected,
        toggleExperience,
        toggleProject,
        allClear,
        loading,
        hidden,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
};

export const useResumeContext = () => useContext(ResumeContext);