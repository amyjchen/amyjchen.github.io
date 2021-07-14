import { Skill } from '../data/skills';

export const skillsToParentheses = (skills? : Skill[]) => {
  return `${skills ? ` (${(skills.map((s => s.short_name || s.name)).join(', '))}).` : '.'}`;
}