import { Lengths } from "./experiences";
import skills, { Skill } from "./skills";
export type Project = {
  key: string,
  title: string,
  start_date: Date,
  completion_date?: Date,
  description: string,
  skills?: Skill[],
  notes?: string,
  lengths: Lengths,
};

const ollie_fyi: Project = {
  key: 'Ollie',
  title: 'Ollie.fyi',
  start_date: new Date(2022, 5, 3),
  description: 'A consumer software-as-a-service product for saving and sharing anything online, complete with social previews and embedded content, collaborative modes, comments, a reporting system, and paid subscriptions',
  skills: [
    skills.react,
    skills.nextjs,
    skills.javascript,
    skills.typescript,
    skills.firebase,
    skills.aws_lambda,
    skills.aws_cloudfront,
    skills.stripe,
    skills.tailwind,
  ],
  lengths: {
    full_length: 2,
    short_length: 2,
  }
}

const resume_generator: Project = {
  key: 'Resume',
  title: 'Resume Generator',
  start_date: new Date(2021, 0, 29),
  completion_date: new Date(2021, 6, 12),
  description: 'The project that generated this resume! I got tired of manually re-formatting my resume',
  skills: [
    skills.typescript,
    skills.react,
  ],
  lengths: {
    full_length: 2,
    short_length: 2,
  },
};

const iQueue: Project = {
  key: 'iQueue',
  title: 'iQueue',
  start_date: new Date(2017, 8, 25),
  completion_date: new Date(2018, 2, 23),
  description: 'Mobile app for efficient queueing. Groups students into small, topic-based groups to make office hours more collaborative and efficient',
  skills: [
    skills.react_native,
    skills.python,
  ],
  lengths: {
    full_length: 3,
    short_length: 3,
  },
}

const orion: Project = {
  key: 'Orion',
  title: 'Orion',
  start_date: new Date(2018, 1, 23),
  completion_date: new Date(2018, 2, 23),
  description: 'Mobile puzzle game based on the patterns of constellations',
  skills: [
    skills.unity,
    skills.adobe,
  ],
  lengths: {
    full_length: 2,
    short_length: 2,
  },
}

const speedi: Project = {
  key: 'Speedi',
  title: 'Speedi!',
  start_date: new Date(2017, 5, 19),
  completion_date: new Date(2017, 8, 8),
  description: 'Chrome DevTools Extension for web developers. Shows user-centric times with insights into possible problems',
  skills: [
    skills.chrome_extensions,
  ],
  lengths: {
    full_length: 3,
    short_length: 3,
  },
}

const projects = [
  ollie_fyi,
  resume_generator,
  iQueue,
  orion,
  speedi,
];

export default projects;