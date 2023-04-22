import { ReactNode, createContext, useContext, useState } from "react";
import skills, { Skill } from "../../data/skills";
import experiences, { Experience } from "../../data/experiences";
import { dedupeSkills } from "../ResumePage/ExperienceCard";
import projects, { Project } from "../../data/projects";

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
}

export const ResumeContext = createContext(initialState);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [hideDeselected, setHideDeselected] = useState(false);

  const [selectedSkills, setSelectedSkills] = useState(Object.values(skills));
  const [selectedExperiences, setSelectedExperiences] = useState(experiences);
  const [selectedProjects, setSelectedProjects] = useState(projects);

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
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
};

export const useResumeContext = () => useContext(ResumeContext);