import {
  Headline,
  Byline,
  Description,
  SubSubSection,
  Body,
  Subtitle,
  Bullet,
  HeavyText
} from '../shared/StyledComponents';
import Category from '../shared/Category';
import { Experience } from '../../../data/experiences';
import { formatDate } from '../../../utils/dateFormatter';
import { skillsToParentheses } from '../../../utils/skillsFormatter';

const ExperienceSection = ({
  experiences,
  hidden
}: {
  experiences: Experience[],
  hidden: { [key: string]: 'min_bullets' | 'hide_bullets' | 'hide' },
}) => (
  <Category name="experience">
    {experiences.map((e) => hidden[e.key] === 'hide' ? null : (
      <SubSubSection key={`${e.title}-${e.organization}-resume`}>
        <Headline>
          <Body>{e.title.toUpperCase()}</Body>
          <Body>{e.organization.toUpperCase()}</Body>
        </Headline>
        <Byline>
          <Subtitle>{formatDate(e.start_date)} - {!!e.end_date ? formatDate(e.end_date) : 'present'} </Subtitle>
          <Subtitle>{e.location.toLowerCase()}</Subtitle>
        </Byline>
        {e.link && hidden[e.key] !== 'hide_bullets' &&
          <Byline>
            <Subtitle>{e.link}</Subtitle>
          </Byline>
        }
        {hidden[e.key] !== 'hide_bullets' && e.bullets?.map((b) => hidden[e.key] === 'min_bullets' && b.optional ? null : (
          <Description key={`${b.specifier}-${b.text}-resume`}>
            <Body>— </Body>
            <Bullet>
              <Body>
                {!!b.specifier && (<HeavyText>{b.specifier}</HeavyText>)}{b.text}{skillsToParentheses(b.skills)}
              </Body>
            </Bullet>
          </Description>
        )
        )}
      </SubSubSection>
    )
    )}
  </Category>
);

export default ExperienceSection;