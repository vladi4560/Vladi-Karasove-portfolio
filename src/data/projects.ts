export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '[PROJECT ONE TITLE]',
    description: '[PLACEHOLDER] A full-featured web application built with modern tooling. Handles authentication, real-time updates, and a clean responsive UI.',
    image: undefined,
    githubUrl: 'https://github.com/[YOUR GITHUB USERNAME]/[REPO]',
    liveUrl: undefined,
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'project-2',
    title: '[PROJECT TWO TITLE]',
    description: '[PLACEHOLDER] A REST API service with role-based access control, integrated with third-party services, and deployed on AWS.',
    image: undefined,
    githubUrl: 'https://github.com/[YOUR GITHUB USERNAME]/[REPO]',
    liveUrl: undefined,
    techStack: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    featured: true,
  },
  {
    id: 'project-3',
    title: '[PROJECT THREE TITLE]',
    description: '[PLACEHOLDER] An open-source CLI tool that automates repetitive development tasks and integrates with popular workflows.',
    image: undefined,
    githubUrl: 'https://github.com/[YOUR GITHUB USERNAME]/[REPO]',
    liveUrl: undefined,
    techStack: ['TypeScript', 'Node.js', 'Shell'],
    featured: true,
  },
];
