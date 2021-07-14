import skills, { Skill } from './skills';

export type Bullet = {
  specifier?: string,
  text: string,
  skills?: Skill[],
  notes?: string,
};

export type Experience = {
  title: string,
  organization: string,
  location: string,
  start_date: Date,
  end_date?: Date,
  bullets?: Array<Bullet>,
  skills?: Array<Skill>,
};

const Alto : Experience = {
  title: 'Full-Stack Software Engineer (L4)',
  organization: 'Alto Pharmacy',
  location: 'San Francisco, CA',
  start_date: new Date(2020, 7, 4),
  bullets: [
    {
      text: 'Working across two web apps and a mobile app to support healthcare provider needs',
      skills: [
        skills.react,
        skills.react_native, 
        skills.ruby_on_rails,
        skills.javascript,
        skills.flow,
        skills.storybook,
      ],
    }
  ],
  /*
  bullets: [
    {
      text: 'Played a critical role in developing a new component library and mobile app',
      skills: [
        skills.react_native,
      ]
    },
    {
      text: 'Worked across two web applications and one mobile app to support medical providers needs',
      skills: [
        skills.react,
        skills.react_native,
        skills.ruby_on_rails,
        skills.ruby,
      ]
    },
  ],
  */
  skills: [
    skills.react, 
    skills.react_native,
    skills.ruby,
    skills.writing,
  ],
};


const OneConcernPtTwo : Experience = {
  title: 'Software Engineer',
  organization: 'One Concern',
  location: 'Palo Alto + Menlo Park, CA',
  start_date: new Date(2018, 8, 20),
  end_date: new Date(2019, 8, 20),
  bullets: [
    {
      text: 'Wrote UI components and endpoint stubs for a new product',
      skills: [
        skills.react, 
        skills.typescript, 
        skills.go,
        skills.apollo,
      ]
    },
    {
      text: `Integrated Storybook — a tool for developing, demoing, and testing React components — into the
      frontend team's workflow, complete with stories for all components on the product`,
      skills: [
        skills.react, 
        skills.storybook,
      ]
    },
    {
      text: 'Refactored the product to use React-Apollo Hooks as a proof of concept',
      skills: [
        skills.react, 
        skills.apollo,
      ]
    },
    {
      text: `Wrote a task and template for spritesheet generation`,
      skills: [
        skills.grunt,
        skills.mustache,
      ]
    }
  ],
  skills: [
    skills.graphQL,
  ]
};

const TA : Experience = {
  title: 'Teaching Assistant',
  organization: 'Stanford University',
  location: 'Stanford, CA',
  start_date: new Date(2019, 3, 1),
  end_date: new Date(2020, 5, 14),
  bullets: [
    {
      specifier: 'Social Computing',
      text: ': taught and created content for a new experimental course. Led weekly sections. Wrote websites for students to submit and interact with each other\'s assignments',
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
};

const OneConcernPtOne : Experience = {
  title: 'Software Engineering Intern',
  organization: 'One Concern',
  location: 'Palo Alto, CA',
  start_date: new Date(2018, 5, 25),
  end_date: new Date(2018, 8, 20),
  bullets: [
    {
      text: 'Took ownership of two features of the Seismic product',
      skills: [
        skills.react,
        skills.javascript,
        skills.ruby_on_rails,
        skills.python,
        skills.postgreSQL,
        // skills.mapbox,
      ],
    },
    {
      text: 'Presented a new feature at a Town Hall and to a client',
    },
    {
      text: 'Coordinated across data science, design, and customer success to define objective and complete features for product demo deadlines',
    }
  ],
  skills: [
    skills.mapbox,
  ]
};

const eBay: Experience = {
  title: 'Search Experience Software Engineering Intern',
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
      ]
    },
    {
      text: "1st place in eBay’s Intern Hackathon: Presented at All Hands and to CEO. Identified and proposed solution to issue affecting women of color on the site", // Team of eight"
    },
    {
      text: "3rd place in eBay’s Hack Week: Proposed new feature and branding strategy focusing on small businesses"
    }
  ],
};

/*
const AcxiomLabs : Experience = {
  title: 'R&D Intern',
  organization: 'Acxiom Labs',
  location: 'Redwood City, CA',
  start_date: new Date(2016, 6, 19), // find real start date
  end_date: new Date(2016, 8, 8), // find real start date
}
*/

const Drone : Experience = {
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
}

const experiences = [
  Alto,
  OneConcernPtTwo,
  TA,
  OneConcernPtOne,
  eBay,
  // AcxiomLabs,
  Drone,
];

export default experiences;