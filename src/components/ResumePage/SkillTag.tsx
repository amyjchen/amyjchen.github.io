import React from 'react';
import { Skill } from '../../data/skills';
import Tag from '../shared/Tag';
import { useResumeContext } from '../contexts/ResumeContext';

const SkillTag = ({
  skill,
}: {
  skill: Skill,
}) => {
  const { isSelectedSkill, toggleSkill } = useResumeContext();
  const { name, background_color, text_color } = skill;
  return (
    <Tag
      onClick={(e) => {
        e.stopPropagation();
        toggleSkill(skill);
      }}
      backgroundColor={background_color}
      textColor={text_color}
      inset={isSelectedSkill(skill)}
    >
      {name.toUpperCase()}
    </Tag>
  );
}

export default SkillTag;