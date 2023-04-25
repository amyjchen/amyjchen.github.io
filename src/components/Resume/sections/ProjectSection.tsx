import {
  InlineHeadline,
  Description,
  SubSubSection,
  Body,
  Subtitle,
} from '../shared/StyledComponents';
import Category from '../shared/Category';
import { Project } from '../../../data/projects';
import { format, isSameYear } from 'date-fns';
import { skillsToParentheses } from '../../../utils/skillsFormatter';

const ProjectSection = ({
  projects,
  hidden
}: {
  projects: Project[],
  hidden: { [key: string]: 'min_bullets' | 'hide_bullets' | 'hide' },
}) => {
  const getDate = (start_date: Date, completion_date?: Date) => {
    if (!completion_date) {
      if (isSameYear(start_date, Date.now())) {
        return `${format(start_date, 'MMM yyyy').toLowerCase()} - ongoing`;
      }
      return `${format(start_date, 'yyyy')} - ongoing`;
    }
    if (isSameYear(start_date, completion_date)) {
      return format(start_date, 'yyyy');
    }
    return `${format(start_date, 'yyyy')} - ${format(completion_date, 'yyyy')}`;
  }
  return (
    <Category name="projects">
      {projects.map((p) => (
        <SubSubSection key={p.title}>
          <InlineHeadline>
            <Body>
              {p.title.toUpperCase()}
            </Body>
            <Subtitle>
              {` `}{` `}{` | `}
            </Subtitle>
            <Subtitle>
              {getDate(p.start_date, p.completion_date)}
            </Subtitle>
          </InlineHeadline>
          <Description>
            <Body>
              {p.description}{skillsToParentheses(p.skills)}
            </Body>
          </Description>
        </SubSubSection>
      ))}
    </Category>
  );
};

export default ProjectSection;