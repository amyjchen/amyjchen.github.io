import {
  Description,
  Body,
} from '../shared/StyledComponents';
import Category from '../shared/Category';
import { Skill, SkillType} from '../../../data/skills';

const SkillsSection  = ({skills} : {skills: Skill[]}) => {
  const languages =  skills.filter((s) => s.type === SkillType.language);
  const primaryLanguages = languages.filter((s) => s.level === 0).map(l => l.name);
  const secondaryLanguages = languages.filter((s) => s.level === 1).map(l => l.name);
  const tertiaryLanguages = languages.filter((s) => s.level === 2).map(l => l.name);
  const otherSkills = skills.filter((s) => s.type !== SkillType.language).sort((a, b) => (a.level - b.level)).map(l => l.name);
  return (
    <Category name="skills">
      <Description>
        <Body>
          { primaryLanguages && `Proficient in ${primaryLanguages.join(', ')}`}.
          { secondaryLanguages && ` Comfortable writing ${secondaryLanguages.join(', ')}`}.
          { tertiaryLanguages && ` Have worked with ${tertiaryLanguages.join(', ')}`}.
          Experience with {otherSkills.join(', ')}.
        </Body>
      </Description>
    </Category>
  );
}

export default SkillsSection;