export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'HTML',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'CSS',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Responsive Web Design',
    competency: 5,
    category: ['Web Development', 'UI/UX'],
  },
  {
    title: 'UI/UX Design',
    competency: 4,
    category: ['UI/UX'],
  },
  {
    title: 'Website Customization',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Frontend Development',
    competency: 4,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };