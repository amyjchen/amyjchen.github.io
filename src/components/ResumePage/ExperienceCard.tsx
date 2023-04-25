import styled from 'styled-components';
import { formatDate } from '../../utils/dateFormatter';
import { skillsToParentheses } from '../../utils/skillsFormatter';
import { Experience, Bullet } from '../../data/experiences';
import SkillTag from './SkillTag';
import { Skill } from '../../data/skills';
import { BulletWrapper, BulletText, Card, Row, Column, SkillTagContainer, Headline, HeadlineRight, Byline, BylineRight } from './Shared';
import { useResumeContext } from '../contexts/ResumeContext';

const Specifier = styled.span`
  font-weight: 500;
`;

const BulletPoint = styled.div`
  font-size: 12px;
  margin-right: 5px;
  line-height: 1.3em;
`;



export const dedupeSkills = (bullets?: Bullet[], skills?: Skill[]) => {
  if (!bullets) return skills || [];
  const a = bullets?.map((b) => b.skills || []).flat().concat(skills || []);
  return a.filter((value, index, self) => self.indexOf(value) === index);
}


const ExperienceCard = ({ experience }: { experience: Experience, inset?: boolean }) => {
  const { title, organization, location, start_date, end_date, bullets, skills, link } = experience;
  const { toggleExperience, selectedExperiences } = useResumeContext();
  return (
    <Card inset={!selectedExperiences.includes(experience)} onClick={() => toggleExperience(experience)}>
      <Column>
        <div>
          <Row>
            <Headline>{title.toUpperCase()}</Headline>
            <HeadlineRight>{organization.toUpperCase()}</HeadlineRight>
          </Row>
          <Row>
            <Byline>{formatDate(start_date)} - {!!end_date ? formatDate(end_date) : 'present'} </Byline>
            <BylineRight>{location}</BylineRight>
          </Row>
          {link &&
            <Row>
              <Byline><a href={link} target='_blank rel="noreferrer"'>{link}</a></Byline>
            </Row>}
          <div>
            {bullets?.map((b) => (
              <BulletWrapper key={`${b.specifier}-${b.text}`}>
                <BulletPoint>—</BulletPoint>
                <BulletText>{!!b.specifier && <Specifier>{b.specifier}</Specifier>}{b.text}{skillsToParentheses(b.skills)}</BulletText>
              </BulletWrapper>
            ))}
          </div>
        </div>
        <SkillTagContainer>
          {dedupeSkills(bullets, skills).map((s) => (
            <SkillTag skill={s} key={`${title}-${organization}-${s.name}`} />
          )
          )}
        </SkillTagContainer>
      </Column>
    </Card >
  );
}

export default ExperienceCard;