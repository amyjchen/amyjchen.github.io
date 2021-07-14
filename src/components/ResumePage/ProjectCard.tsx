import React from 'react';
import { Project } from '../../data/projects';
import { formatDate } from '../../utils/dateFormatter';
import { Skill } from '../../data/skills';
import SkillTag from './SkillTag';
import { BulletWrapper, BulletText, Card, Row, Column, SkillTagContainer, Headline, Byline } from './Shared';

const ProjectCard = ({project, toggleSkill, isSelected} : { project: Project, inset?: boolean, toggleSkill: (s: Skill) => void, isSelected: (s: Skill) => boolean}) => {
  const { title, start_date, completion_date, description, skills } = project;
  const selectedSkills = skills?.filter((s) => !isSelected(s)) || [];
  return (
    <Card inset={selectedSkills.length === 0}>
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
            <SkillTag skill={s} onClick={toggleSkill} isSelected={isSelected}/>         
          ))}
        </SkillTagContainer>
      </Column>
    </Card>
  )
};

export default ProjectCard;