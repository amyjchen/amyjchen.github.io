import {
  SubHeader,
  Section,
  SubSection,
} from './StyledComponents';

const Category = ({ children, name } : {children : any, name: string}) => (
  <Section>
    <SubHeader category={name}/>
    <SubSection>
      {children}
    </SubSection>
  </Section>
);

export default Category;