import experiences from './experiences';
import education from './education';
import publications from './publications';
import projects from './projects';
import skills from './skills';

const data = {
  about: 'Full-stack developer striving to learn as much as possible to make positive change.',
  education,
  experiences,
  projects,
  publications,
  skills: Object.values(skills),
};

export default data;