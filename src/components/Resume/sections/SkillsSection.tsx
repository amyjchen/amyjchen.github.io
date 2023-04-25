import {
  Description,
  Body,
} from '../shared/StyledComponents';
import Category from '../shared/Category';
import { Skill, SkillType } from '../../../data/skills';
import data from '../../../data/data';

const SkillsSection = ({ skills }: { skills: Skill[] }) => {
  const listedSkills = data.skills.filter((s) => s.level < 2 || skills.includes(s));
  const languages = listedSkills.filter((s) => s.type === SkillType.language);
  const primaryLanguages = languages.filter((s) => s.level === 0).map(l => l.name).join(', ');
  const secondaryLanguages = languages.filter((s) => s.level === 1).map(l => l.name).join(', ');
  // const tertiaryLanguages = languages.filter((s) => s.level === 2).map(l => l.name).join(', ');
  const nonLanguage = listedSkills.filter((s) => s.type !== SkillType.language)
  const otherSkills = nonLanguage.filter((a) => nonLanguage.length > 15 ? a.level <= 2 : a.level <= 3).sort((a, b) => (a.level - b.level)).map(l => l.name).join(', ');

  const skillSentences = [];
  if (!!primaryLanguages) skillSentences.push(`Proficient in ${primaryLanguages}.`);
  if (!!secondaryLanguages) skillSentences.push(`Comfortable writing ${secondaryLanguages}.`);
  if (!!otherSkills) skillSentences.push(`Experience with ${otherSkills}.`);

  const skillText = skillSentences.join(' ');
  return (
    <Category name="skills">
      <Description>
        <Body>
          {skillText}
        </Body>
      </Description>
    </Category>
  );
}

export default SkillsSection;