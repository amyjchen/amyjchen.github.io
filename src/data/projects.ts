import skills, { Skill } from "./skills";
export type Project = {
  title: string,
  start_date: Date,
  completion_date?: Date,
  description: string,
  skills?: Skill[],
  notes?: string,
};

const resume_generator : Project = {
  title: 'Resume Generator',
  start_date: new Date(2021, 0, 29),
  completion_date: new Date(2021, 6, 12),
  description: 'The project that generated this resume! I got tired of manually re-formatting my resume',
  skills: [
    skills.typescript,
    skills.react,
  ],
};

/*
const listful : Project = {
  title: 'Listful',
  start_date: new Date(2020, 10, 1),
  description: 'Web application for list sharing',
  skills: [
    skills.typescript,
    skills.react,
    skills.python,
  ],
};
*/

const iQueue : Project = {
  title: 'iQueue',
  start_date: new Date(2017, 8, 25),
  completion_date: new Date(2018, 2, 23),
  description: 'Mobile app for efficient queueing. Groups students into small, topic-based groups to make office hours more collaborative and efficient',
  skills: [
    skills.react_native, 
    skills.python,  // TODO: heroku
  ],
}

const orion : Project = {
  title: 'Orion',
  start_date: new Date(2018, 1, 23),
  completion_date: new Date(2018, 2, 23),
  description: 'Mobile puzzle game based on the patterns of constellations',
  skills: [
    skills.unity,
    skills.adobe,
  ]
}

const speedi : Project = {
  title: 'Speedi!',
  start_date: new Date(2017, 5, 19),
  completion_date: new Date(2017, 8, 8),
  description: 'Chrome DevTools Extension for web developers. Shows user-centric times with insights into possible problems',
  skills: [
    skills.chrome_extensions,
  ]
}

const projects = [
  resume_generator, 
  // listful, 
  iQueue,
  orion,
  speedi,
];

export default projects;