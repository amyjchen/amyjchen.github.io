import React from 'react';
import { Skill } from '../../data/skills';
import Tag from '../shared/Tag';

const SkillTag = ({
  skill, 
  inset,
  isSelected,
  onClick,
} : {
  skill: Skill, 
  inset?: boolean,
  isSelected: (s: Skill) => boolean,
  onClick?: (s: Skill) => void,
}) => {
  const { name, background_color, text_color } = skill;
  return (
    <Tag 
      onClick={onClick && (() => onClick(skill))} 
      backgroundColor={background_color} 
      textColor={text_color} 
      inset={isSelected(skill)}
    >
      {name.toUpperCase()}
    </Tag>
  );
}

export default SkillTag;