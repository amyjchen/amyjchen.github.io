import React, { useState } from 'react';
import { isDesktop } from 'react-device-detect';
import styled from 'styled-components';
import Resume from '../Resume';
import { PDFViewer } from '@react-pdf/renderer';
import ExperienceCard, { dedupeSkills } from './ExperienceCard';
import ProjectCard from './ProjectCard';
import experiences from '../../data/experiences';
import projects from '../../data/projects';
import skills, { Skill } from '../../data/skills';
import SkillTag from './SkillTag';

const SearchBar = styled.div`
  padding: 15px 20px 10px 20px;
  margin-right: 15px;
  box-shadow: inset 4px 4px 5px rgba(0, 0, 0, 0.10), inset -4px -4px 5px rgba(256, 256, 256, 0.5), 4px 4px 15px rgba(0, 0, 0, 0.10), -4px -4px 20px rgba(256, 256, 256, 0.5);
  background: #EFEEEE;
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const CenteredText = styled.div`
  text-align: center;
`;

const ResumeWrapper = styled.div`
  padding: 1vw;
`;

const FiltersWrapper = styled.div`
  display: flex;
  align-items: stretch;
  padding: 10px;
  flex: auto;
`;

const CardSection = styled.div`
  padding: 10px;
  display: grid;
  justify-items: stretch;
`;

const GenerateButton = styled.button`
  font-family: Jost;
  font-weight: 700;
  height: 50px;
  color: white;
  background: linear-gradient(90deg, #ff5353 0%, #FFE600 50%, #33d0ff 100%);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(256, 256, 256, 0.9);
`;

const FilterButton = styled.button`
  min-width: 100px;
`;

const ExtraPadding = styled.div`
  padding: 20px;
`;

// todo: custom selection => custom resume generation
const ResumePage = () => {
  const [ selectedSkills, setSelectedSkills ] = useState(Object.values(skills));
  const [ hideDeselected, setHideDeselected ] = useState(false);


  const isSelected = (s: Skill) => !selectedSkills.includes(s);
  const toggleSkill = (s: Skill) => {
    if (selectedSkills.includes(s)) {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== s));
    } else {
      setSelectedSkills([...selectedSkills, s]);
    }
  }

  const selectedExperiences = experiences.filter((e) => {
    const experienceSkills = dedupeSkills(e.bullets, e.skills);
    return experienceSkills.some((s) => selectedSkills.includes(s));
  });

  const selectedProjects = projects.filter((p) => p.skills?.some((s) => selectedSkills.includes(s)));

  const deselectedExperiences = experiences.filter((e) => !selectedExperiences.includes(e));
  const deselectedProjects = projects.filter((p) => !selectedProjects.includes(p));

  const filteredExperiences = hideDeselected ? selectedExperiences : selectedExperiences.concat(deselectedExperiences);
  const filteredProjects = hideDeselected ? selectedProjects : selectedProjects.concat(deselectedProjects);

  return (
    <ResumeWrapper>
      <FiltersWrapper>
        {isDesktop ? <SearchBar> {
           Object.values(skills).map((s) => (
            <SkillTag 
              skill={s} 
              isSelected={isSelected}
              inset={!selectedSkills.includes(s)}
              onClick={toggleSkill}
            />
          )) }
        </SearchBar>
        : <CenteredText>
            You're missing out! Come back on desktop to get the full experience 🙃
          </CenteredText>}
        {/*isDesktop && <GenerateButton> GENERATE RESUME </GenerateButton>*/}
      </FiltersWrapper>
      <FiltersWrapper>
        <FilterButton className={hideDeselected ? "inset" : ''} onClick={() => setHideDeselected(!hideDeselected)}>{hideDeselected ? 'show' : 'hide'} filtered </FilterButton>
      </FiltersWrapper>

      <CenteredText><h2>Experience</h2></CenteredText>
      <CardSection className="card-container">
        {filteredExperiences.map((experience) => <ExperienceCard experience={experience} toggleSkill={toggleSkill} isSelected={isSelected}/>)}
      </CardSection>

      <CenteredText><h2>Projects</h2></CenteredText>
      <CardSection className="card-container">
        {filteredProjects.map((project) => <ProjectCard project={project} toggleSkill={toggleSkill} isSelected={isSelected}/>)}
      </CardSection>

      <CardSection className="card-container">
          <CenteredText>
            <h2>Education</h2>
            Studied things that go <i>beep boop</i> for a few too many years, <br/>
            ran a poetry collective, and published a literary magazine at Stanford University.
          </CenteredText>
          <CenteredText>
            <h2>Misc</h2>
            I love cooking and <a href="https://www.youtube.com/watch?v=SVyLlFezj2E">smokin' meats</a>. <br/>
            Verbally fluent in Mandarin Chinese; used to know French. 
          </CenteredText>
      </CardSection>
      <ExtraPadding/>
      {isDesktop && 
        <PDFViewer style={{width: '100%', height: '100vh', border: 'none'}}>
          <Resume/>
        </PDFViewer>
      }
    </ResumeWrapper>
  );
}

export default ResumePage;