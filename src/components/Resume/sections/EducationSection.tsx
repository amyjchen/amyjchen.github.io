import {
  Headline,
  Description,
  SubSubSection,
  Body,
} from '../shared/StyledComponents';
import Category from '../shared/Category';
import { Education } from '../../../data/education';
import { format } from 'date-fns';

const EducationSection = ({ education } : { education : Education[] }) => (
  <Category name="education">
      {education.map((d) => (
        <SubSubSection>
         <Headline>
           <Body>{d.institution.toUpperCase()}</Body>
           <Body>{d.location.toUpperCase()}</Body>
         </Headline>
         {d.degrees.map((deg => (
           <Description>
             <Body>
               {deg.name} '{format(deg.date, 'yy')} {deg.subject}{deg.subdegree && `, ${deg.subdegree_subject} ${deg.subdegree}`}
             </Body>
             {deg.gpa && <Body>{deg.gpa.toPrecision(4)} GPA</Body>}
           </Description>
          )))} 
          {!!d.activities &&
            <Description>
              <Body>
                Activities: {d.activities.join(', ')}
              </Body>
            </Description>
          }
        </SubSubSection>
      ))}
  </Category>
);

export default EducationSection;