import { Document, Page } from '@react-pdf/renderer';
import { format } from 'date-fns';
import data from '../../data/data';
import styles from '../../styles';
import {
  Header,
} from './shared/StyledComponents';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectSection from './sections/ProjectSection';
import PublicationSection from './sections/PublicationSection';
import SkillsSection from './sections/SkillsSection';
import { Education } from '../../data/education';
import { Experience } from '../../data/experiences';
import { Project } from '../../data/projects';
import { Publication } from '../../data/publications';
import { Skill } from '../../data/skills';

// TODO
// - limit objects to one page

type Props = {
  about?: string,
  education?: Education[],
  experiences?: Experience[],
  projects?: Project[],
  publications?: Publication[],
  skills?: Skill[],
  hidden?: { [key: string]: 'min_bullets' | 'hide_bullets' | 'hide' },
}

const Resume = ({
  about = data.about,
  education = [data.education[0]],  // TODO: create a "default resume" data structure
  experiences = data.experiences,
  projects = data.projects.filter((p) => !p.completion_date || p.completion_date?.getFullYear() > 2018),
  publications = data.publications,
  skills = data.skills,
  hidden = {},
}: Props) => (
  <Document title={`amy_chen_resume_generated_${format(new Date(), 'dMMMMy')}`}>
    <Page size="LETTER" style={styles.page}>
      <Header name="Amy J. Chen" details='amyjchen.com   |   me@amyjchen.com   |   @artwritecode' />
      <AboutSection about={about} />
      {education.length > 0 && <EducationSection education={education} />}
      {experiences.length > 0 && <ExperienceSection experiences={experiences} hidden={hidden} />}
      {projects.length > 0 && <ProjectSection projects={projects} hidden={hidden} />}
      {publications.length > 0 && false && <PublicationSection publications={publications} />}
      <SkillsSection skills={skills} />
    </Page>
  </Document>
);

export default Resume;