import React from 'react';
import { Project } from '../../data/projects';
import { formatDate } from '../../utils/dateFormatter';
import { Skill } from '../../data/skills';
import SkillTag from './SkillTag';
import { BulletWrapper, BulletText, Card, Row, Column, SkillTagContainer, Headline, Byline } from './Shared';
import { useResumeContext } from '../contexts/ResumeContext';

const ProjectCard = ({ project }: { project: Project, inset?: boolean }) => {
  const { title, start_date, completion_date, description, skills } = project;
  const { selectedProjects, toggleProject } = useResumeContext();
  return (
    <Card inset={!selectedProjects.includes(project)} onClick={() => toggleProject(project)}>
      <Column>
        <Row>
          <Headline>{title.toUpperCase()}</Headline>
          <Byline>{formatDate(start_date)} - {!!completion_date ? formatDate(completion_date) : 'present'} </Byline>
        </Row>
        <BulletWrapper>
          <BulletText>{description}</BulletText>
        </BulletWrapper>
        <SkillTagContainer>
          {skills?.map((s) => (
            <SkillTag skill={s} key={`${title}-${s.name}`} />
          ))}
        </SkillTagContainer>
      </Column>
    </Card>
  )
};

export default ProjectCard;