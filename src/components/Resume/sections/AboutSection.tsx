import Category from '../shared/Category';
import {
  SubSubSection,
  Description,
  Body,
} from '../shared/StyledComponents';

const AboutSection = ( { about } : { about : string }) => (
  <Category name="about">
    <SubSubSection>
      <Description>
        <Body>{about}</Body>
      </Description>
    </SubSubSection>
  </Category>
);

export default AboutSection;