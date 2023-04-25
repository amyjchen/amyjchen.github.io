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
import { useResumeContext } from '../contexts/ResumeContext';

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
  margin: 0px 5px;
`;

const ExtraPadding = styled.div`
  padding: 20px;
`;

// todo: custom selection => custom resume generation
const ResumePage = () => {
  const {
    allClear,
    selectAll,
    clearAll,
    resumeSkills,
    selectedExperiences,
    selectedProjects,
    filteredExperiences,
    filteredProjects,
    hideDeselected,
    setHideDeselected,
    loading,
    hidden,
  } = useResumeContext();

  return (
    <ResumeWrapper>
      <FiltersWrapper>
        {isDesktop ? <SearchBar> {
          Object.values(skills).map((s) => (
            <SkillTag skill={s} key={s.name} />
          ))}
        </SearchBar>
          : <CenteredText>
            You're missing out! Come back on desktop to get the full experience 🙃
          </CenteredText>}
        {/*isDesktop && <GenerateButton> GENERATE RESUME </GenerateButton>*/}
      </FiltersWrapper>
      <FiltersWrapper>
        <FilterButton className={hideDeselected ? "inset" : ''} onClick={() => setHideDeselected(!hideDeselected)}>{hideDeselected ? 'show' : 'hide'} filtered </FilterButton>
        <FilterButton onClick={() => allClear ? selectAll() : clearAll()}>{allClear ? 'select all' : 'clear all'}</FilterButton>
      </FiltersWrapper>

      <CenteredText><h2>Experience</h2></CenteredText>
      <CardSection className="card-container">
        {filteredExperiences.map((experience) => <ExperienceCard experience={experience} key={`${experience.title}-${experience.organization}`} />)}
      </CardSection>

      <CenteredText><h2>Projects</h2></CenteredText>
      <CardSection className="card-container">
        {filteredProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
      </CardSection>

      <CardSection className="card-container">
        <CenteredText>
          <h2>Education</h2>
          Studied things that go <i>beep boop</i> for a few too many years, <br />
          ran a poetry collective, and published a literary magazine at Stanford University.
        </CenteredText>
        <CenteredText>
          <h2>Misc</h2>
          I love cooking and <a href="https://www.youtube.com/watch?v=SVyLlFezj2E">smokin' meats</a>. <br />
          Verbally fluent in Mandarin Chinese; used to know French.
        </CenteredText>
      </CardSection>
      <ExtraPadding />
      {isDesktop && !loading &&
        <PDFViewer style={{ width: '100%', height: '100vh', border: 'none' }}>
          <Resume
            experiences={selectedExperiences}
            projects={selectedProjects}
            skills={resumeSkills}
            hidden={hidden}
          />
        </PDFViewer>
      }
    </ResumeWrapper>
  );
}

export default ResumePage;