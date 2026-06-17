export interface Skill {
  name: string;
  weight: 1 | 2 | 3 | 4 | 5;
}

export const skills: Skill[] = [
  // Weight 5 = most prominent
  { name: 'TypeScript', weight: 5 },
  { name: 'React', weight: 5 },
  { name: 'Node.js', weight: 5 },

  // Weight 4
  { name: 'Next.js', weight: 4 },
  { name: 'PostgreSQL', weight: 4 },
  { name: 'REST APIs', weight: 4 },
  { name: 'Git', weight: 4 },

  // Weight 3
  { name: 'Tailwind CSS', weight: 3 },
  { name: 'Docker', weight: 3 },
  { name: 'GraphQL', weight: 3 },
  { name: 'Express', weight: 3 },
  { name: 'MongoDB', weight: 3 },

  // Weight 2
  { name: 'Redis', weight: 2 },
  { name: 'AWS', weight: 2 },
  { name: 'Prisma', weight: 2 },
  { name: 'tRPC', weight: 2 },
  { name: 'Vitest', weight: 2 },

  // Weight 1
  { name: 'Kubernetes', weight: 1 },
  { name: 'Python', weight: 1 },
  { name: 'CI/CD', weight: 1 },
];
