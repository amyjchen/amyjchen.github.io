
export enum SkillType {
  language = 'language',
  library = 'library',
  framework = 'framework',
  platform = 'platform',
  soft_skill = 'soft skill',
  tool = 'tool',
}

// Ruby on Rails, JS, Python, NodeJS, Mapbox, PosgreSQL
// Mandarin, French 
// Heroku
// Unity 

// Areas of knowledge:
// - FE development
// - computer graphics
// - social computing

export type Skill = {
  name: string,
  short_name?: string,
  type: SkillType,
  level: number,
  text_color?: string,
  background_color?: string,
};

const javascript : Skill =  {
  name: 'JavaScript',
  short_name: 'JS',
  type: SkillType.language,
  level: 0,
  background_color: '#f7df1e',
};

const typescript : Skill =  {
  name: 'TypeScript',
  short_name: 'TS',
  type: SkillType.language,
  level: 0,
  background_color: '#3178c6',
  text_color: '#FFFFFF',
};

const python : Skill = {
  name: 'Python',
  type: SkillType.language,
  level: 0, 
  background_color: "#2b5b84",
  text_color: "#ffdf76",
};

const html: Skill = {
  name: 'HTML',
  type: SkillType.language,
  level: 0, 
  background_color: '#f06529',
  text_color: '#FFFFFF',
};

const css : Skill = {
  name: 'CSS',
  type: SkillType.language,
  level: 0, 
  background_color: "#1a5e9a",
  text_color: '#FFFFFF',
};

const ruby : Skill = {
  name: 'Ruby',
  type: SkillType.language,
  level: 1, 
  background_color: "#820C02",
  text_color: "#EDA895",
};

const sql : Skill = {
  name: 'SQL',
  type: SkillType.language,
  level: 1, 
  background_color: "#4479a1",
  text_color: '#FFFFFF',
};

const php : Skill = {
  name: 'PHP',
  type: SkillType.language,
  level: 2, 
  background_color: "#8892BF",
  text_color: "#ffffff",
};

const go : Skill = {
  name: 'Go',
  type: SkillType.language,
  level: 2, 
  background_color: "#7fd5ea",
  text_color: "#ffffff",
};

const cpp : Skill = {
  name: 'C++',
  type: SkillType.language,
  level: 2, 
  background_color: "#5E97D0",
  text_color: "#ffffff",
}

const java: Skill = {
  name: 'Java',
  type: SkillType.language,
  level: 2, 
  background_color: "#5382a1",
  text_color: "#f89820",
}

const react :  Skill = {
  name: 'React',
  type: SkillType.library,
  level: 0,
  background_color: `#61dafb`,
  text_color: '#FFFFFF',
};

const react_native : Skill = {
  name: 'React Native',
  type: SkillType.framework,
  level: 0,
  background_color: `#61dafb`,
  text_color: '#FFFFFF',
};

const ruby_on_rails : Skill = {
  name: 'Ruby on Rails',
  type: SkillType.framework,
  level: 1,
  background_color: '#cc0000',
  text_color: '#FFFFFF',
};

const postgreSQL : Skill = {
  name: 'PostgreSQL',
  type: SkillType.tool,
  level: 1, 
  background_color: "#336791",
  text_color: '#FFFFFF',
};

const storybook : Skill = {
  name: 'Storybook',
  type: SkillType.tool,
  level: 1,
  background_color: "#ff4784",
  text_color: '#FFFFFF',
}

const flow : Skill = {
  name: 'Flow',
  type: SkillType.tool,
  level: 1,
  background_color: "#E8BD36",
  text_color: '#FFFFFF',
}

const apollo : Skill = {
  name: 'Apollo',
  type: SkillType.framework,
  level: 2,
  background_color: "#3f20ba",
  text_color: '#FFFFFF',
}

const graphQL : Skill = {
  name: 'GraphQL',
  type: SkillType.language,
  level: 2,
  text_color: "#e10098",
  background_color: "#171e26",
}

const grunt :  Skill = {
  name: 'Grunt',
  type: SkillType.tool,
  level: 2,
  background_color: "#e48632",
  text_color: '#FFFFFF',
}

const mustache :  Skill = {
  name: 'Mustache',
  type: SkillType.tool,
  level: 2,
  background_color: "#000000",
  text_color: "#ededed",
}

const chrome_extensions :  Skill = {
  name: 'Chrome Extensions',
  type: SkillType.platform,
  level: 2,
  background_color: "rgba(66,133,244,1)",
  text_color: '#FFFFFF',
}

const mapbox : Skill = {
  name: 'Mapbox',
  type: SkillType.tool,
  level: 2,
  background_color: "#4264FB",
  text_color: '#FFFFFF',
}

const processing : Skill = {
  name: 'Processing',
  type: SkillType.tool,
  level: 2,
  background_color: "#0c2033",
  text_color: '#FFFFFF',
}

const public_speaking : Skill = {
  name: 'Public Speaking',
  type: SkillType.soft_skill,
  level: 88,
  background_color: "#bfa6ff",
};

const art : Skill = {
  name: 'Installation & Interactive Art',
  type: SkillType.soft_skill,
  level: 88,
  background_color: "#ad7e18",
  text_color: '#FFFFFF',
};

const writing : Skill = {
  name: 'Writing/Editing',
  type: SkillType.soft_skill,
  level: 88,
  background_color: "#2b6334",
  text_color: "#d5edd9",
};

const design : Skill = {
  name: 'Design',
  type: SkillType.soft_skill,
  level: 88,
  background_color: "#2b2b2b",
  text_color: '#e8e8e8',
};

const adobe : Skill = {
  name: 'Photoshop, Illustrator & InDesign',
  type: SkillType.soft_skill,
  level: 88,
  background_color: "#ED2224",
  text_color: '#FFFFFF',
};

const unity : Skill = {
  name: 'Unity',
  type: SkillType.tool,
  level: 88, 
  background_color: "#222c37",
  text_color: '#FFFFFF',
}

const skills = {
  javascript, 
  typescript,
  python,
  html,
  css,
  ruby,
  sql,
  php,
  go, 
  cpp,
  java,
  react,
  react_native,
  ruby_on_rails,
  storybook,
  flow, 
  postgreSQL,
  apollo, 
  graphQL,
  grunt,
  mustache,
  processing,
  chrome_extensions,
  mapbox,
  unity,
  public_speaking,
  art,
  writing,
  design,
  adobe,
};

export default skills;