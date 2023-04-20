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


const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => (
  <Category name="experience">
    {experiences.map((e) => (
      <SubSubSection key={`${e.title}-${e.organization}`}>
        <Headline>
          <Body>{e.title.toUpperCase()}</Body>
          <Body>{e.organization.toUpperCase()}</Body>
        </Headline>
        <Byline>
          <Subtitle>{formatDate(e.start_date)} - {!!e.end_date ? formatDate(e.end_date) : 'present'} </Subtitle>
          <Subtitle>{e.location.toLowerCase()}</Subtitle>
        </Byline>
        {e.bullets?.map((b) => (
          <Description key={b.text}>
            <Body>— </Body>
            <Bullet>
              <Body>
                {!!b.specifier && (<HeavyText>{b.specifier}</HeavyText>)}{b.text}{skillsToParentheses(b.skills)}
              </Body>
            </Bullet>
          </Description>
        ))}
      </SubSubSection>
    ))}
  </Category>
);

export default ExperienceSection;