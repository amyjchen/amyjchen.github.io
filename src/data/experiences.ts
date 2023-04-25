import skills, { Skill } from './skills';

export type Bullet = {
  specifier?: string,
  text: string,
  skills?: Skill[],
  notes?: string,
  optional?: boolean, // do not show on short mode
};

export type Lengths = {
  full_length: number,
  short_length: number,
};

export type Experience = {
  key: string,
  title: string,
  link?: string,
  organization: string,
  location: string,
  start_date: Date,
  end_date?: Date,
  bullets?: Array<Bullet>,
  skills?: Array<Skill>,
  lengths: Lengths,
};

const Ollie: Experience = {
  key: 'Ollie',
  title: 'Founder/Solo Developer',
  link: 'https://ollie.fyi/',
  organization: 'Ollie Studio Lab',
  location: 'San Francisco, CA',
  start_date: new Date(2022, 5, 3),
  bullets: [
    {
      text: 'Designed and built a web application for saving and sharing collections of anything online',
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
      ]
    },
    // landing page
    // logos and UI
    // collaborative modes
    // wrote apis with aws lambda and google cloud for link scraping, image caching and resizing, and updating user subscriptions
    {
      text: 'Participated in PearVC\'s Female Founder Circles',
    }
  ],
  skills: [
    skills.design,
    skills.public_speaking,
    skills.adobe,
  ],
  lengths: {
    full_length: 7,
    short_length: 7,
  },
}

const Dorsia: Experience = {
  key: 'Dorsia',
  title: 'Lead Software Engineer',
  link: 'https://www.dorsia.com/',
  organization: 'Dorsia',
  location: 'Remote',
  start_date: new Date(2022, 2, 21),
  end_date: new Date(2022, 4, 3),
  bullets: [
    {
      text: 'Set up analytics integrations and made code improvements to reduce tech debt.',
      skills: [
        skills.react_native,
        skills.segment,
        skills.mixpanel,
      ]
    },
    {
      text: 'Interviewed candidates and reevaluated engineering hiring process and goals. Facilitated onboarding and integration of a second dev shop into the team',
    },
    {
      text: 'Made documentation improvements and set up review processes to encourage code consistency across teams',
      optional: true,
    },
  ],
  lengths: {
    full_length: 10,
    short_length: 8,
  },
};

const Alto: Experience = {
  key: 'Alto',
  title: 'Full-Stack Software Engineer (L4) — Providers Team',
  link: 'https://alto.com/',
  organization: 'Alto Pharmacy',
  location: 'San Francisco, CA',
  start_date: new Date(2020, 7, 4),
  end_date: new Date(2022, 1, 11),
  bullets: [
    // worked with a team of four to build a new mobile app. Contributed multiple screens and components to the app and component library. Presented work in a public-facing tech talk.
    // led project to update clinic UI to support multiple hierarchical types of clinics (parent, child, individual). 
    // led project to display dynamic third-party forms on our internal operations tool. 
    // contributed to projects to support a type of contract between Alto and providers, refactor the clinic page of our internal tool, create better service boundaries, and integrate with a third-party service. 
    {
      text: 'Led projects to display dyanamic third-party forms in an operations tool and to add support for hierarchical clinics and inherited settings',
      skills: [
        skills.react,
        skills.javascript,
        skills.ruby_on_rails,
      ],
    },
    {
      text: 'Worked with a team of four to build a new mobile app and component library',
      skills: [
        skills.react_native,
        skills.javascript,
        skills.typescript,
      ],
    },
    {
      text: 'Contributed to projects to: fulfill a new contract between Alto and providers, redesign the clinic page, create better service boundaries, and integrate with a third-party service',
      skills: [
        skills.react,
        skills.ruby_on_rails,
        skills.javascript,
        skills.flow,
      ],
    },
    {
      text: 'Coordinated Alto\'s sponsorship, recruiting, and attendance at TAPIA 2021',
    },
    {
      text: 'Supported recruiting efforts by presenting work in a public tech talk, writing a post for the engineering blog, and conducting intro calls and coffee chats with hiring candidates. Mentored newly hired engineers',
      optional: true,
    }
  ],
  skills: [
    skills.react,
    skills.react_native,
    skills.ruby,
    skills.writing,
  ],
  lengths: {
    full_length: 12,
    short_length: 10,
  },
};


const OneConcern: Experience = {
  key: '1C',
  title: 'Software Engineer (Contractor + 2x Summer Intern)',
  link: 'https://www.oneconcern.com/',
  organization: 'One Concern',
  location: 'Palo Alto + Menlo Park, CA',
  start_date: new Date(2018, 5, 25),
  end_date: new Date(2019, 8, 20),
  bullets: [
    {
      text: 'Took ownership of two features of the Seismic product. Presented a feature at a Town Hall and to a client',
      skills: [
        skills.react,
        skills.javascript,
        skills.ruby_on_rails,
        skills.python,
        skills.postgreSQL,
        skills.mapbox,
      ],
    },
    {
      text: 'Coordinated across data science, design, and customer success to define objectives and complete features for product demo deadlines',
      optional: true,
    },
    {
      text: 'Wrote React components for a new disaster mitigation product. Set up Storybook and wrote stories for every component of the app',
      skills: [
        skills.react,
        skills.typescript,
        skills.go,
        skills.apollo,
        skills.storybook,
      ]
    },
    {
      text: 'Refactored the product to use React-Apollo Hooks as a proof of concept',
      skills: [
        skills.react,
        skills.apollo,
      ],
      optional: true,
    },
    {
      text: `Wrote a task and template for spritesheet generation`,
      skills: [
        skills.grunt,
        skills.mustache,
      ],
      optional: true,
    }
  ],
  skills: [
    skills.mapbox,
    skills.public_speaking,
    skills.graphQL,
  ],
  lengths: {
    full_length: 12,
    short_length: 8,
  }
};

const TA: Experience = {
  key: 'TA',
  title: 'Teaching Assistant',
  organization: 'Stanford University',
  location: 'Stanford, CA',
  start_date: new Date(2019, 3, 1),
  end_date: new Date(2020, 5, 14),
  bullets: [
    {
      specifier: 'Social Computing',
      text: ': Wrote websites for students to submit and interact with each other\'s assignments. Taught and created content for a new experimental course. Led weekly sections',
      skills: [
        skills.php,
        skills.sql,
      ],
      notes: 'Spring 2019 and Spring 2020',
    },
    {
      specifier: 'Web Applications',
      text: '',
      skills: [
        skills.react,
        skills.javascript,
        skills.html,
        skills.css,
      ],
      notes: 'Winter 2020',
    },
    {
      specifier: 'Introduction to Computer Graphics',
      text: '',
      skills: [
        skills.cpp,
      ],
      notes: 'Fall 2019',
    },
  ],
  skills: [
    skills.html,
    skills.css,
    skills.javascript,
    skills.php,
    skills.react,
    skills.cpp,
  ],
  lengths: {
    full_length: 7,
    short_length: 7,
  }
};



const eBay: Experience = {
  key: 'ebay',
  title: 'Software Engineering Intern',
  link: 'https://www.ebay.com/',
  organization: 'eBay',
  location: 'San Jose, CA',
  start_date: new Date(2017, 5, 19),
  end_date: new Date(2017, 8, 8),
  bullets: [
    {
      text: 'Wrote user-centric timers measuring perceived load and response times',
      skills: [
        skills.javascript,
        skills.chrome_extensions,
      ],
      optional: true,
    },
    {
      text: "1st place in eBay’s Intern Hackathon: Presented at All Hands and to CEO. Identified and proposed solution to an issue affecting women of color on the site", // Team of eight"
      optional: true,
    },
    {
      text: "3rd place in eBay’s Hack Week: Proposed new feature and branding strategy focusing on small businesses",
      optional: true,
    }
  ],
  lengths: {
    full_length: 8,
    short_length: 4,
  }
};

/*
const AcxiomLabs : Experience = {
  key: 'acxiom',
  title: 'R&D Intern',
  organization: 'Acxiom Labs',
  location: 'Redwood City, CA',
  start_date: new Date(2016, 6, 19), // find real start date
  end_date: new Date(2016, 8, 8), // find real start date
}
*/

const Drone: Experience = {
  key: 'drone',
  title: 'Human-Drone Interaction Research Intern',
  organization: 'Stanford University',
  location: 'Stanford, CA',
  start_date: new Date(2016, 5, 19), // find real start date
  end_date: new Date(2016, 7, 8), // find real start date
  skills: [
    skills.java,
    skills.processing,
    skills.design,
    skills.adobe,
    skills.public_speaking,
  ],
  lengths: {
    full_length: 3,
    short_length: 3,
  }
}

const experiences = [
  Ollie,
  Dorsia,
  Alto,
  TA,
  OneConcern,
  eBay,
  // AcxiomLabs,
  Drone,
];

export default experiences;