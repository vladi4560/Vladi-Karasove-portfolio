import snapgramImg from '../assets/projects/snapgram.png';
import smartravelImg from '../assets/projects/smartravel.png';
import twitterIosImg from '../assets/projects/twitter-ios.jpg';
import legendTalesImg from '../assets/projects/legend-tales.png';
import onepiecetokenImg from '../assets/projects/onepiecetoken.png';

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
    id: 'onepiecetoken',
    title: 'One Piece Token',
    description: 'Open-source TypeScript & Node.js library that reduces Anthropic Claude API costs by up to 49%. Treats your codebase as a dependency graph using AST parsing — finds exactly the files Claude needs per task instead of dumping everything into context. Compresses conversation history, ranks files by relevance, enforces token budgets, and suppresses verbose output.',
    image: onepiecetokenImg,
    githubUrl: 'https://github.com/vladi4560/onepiecetoken',
    techStack: ['TypeScript', 'Node.js', 'AST Parsing', 'Anthropic API'],
    featured: true,
  },
  {
    id: 'snapgram',
    title: 'SnapGram',
    description: 'A full-stack Instagram-inspired social media app — photo sharing, likes, follows, and an explore feed, built with a modern TypeScript front-end.',
    image: snapgramImg,
    githubUrl: 'https://github.com/vladi4560/SnapGram',
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'smartravel',
    title: 'SmarTravel',
    description: 'A smart travel planning client app for Android — helps users discover destinations, plan itineraries, and manage trip details on the go.',
    image: smartravelImg,
    githubUrl: 'https://github.com/vladi4560/SmarTravel-Client',
    techStack: ['Java', 'Android', 'Kotlin'],
    featured: true,
  },
  {
    id: 'twitter-ios',
    title: 'Twitter iOS',
    description: 'A native iOS Twitter clone — tweet feed, user profiles, likes, and real-time updates built with Swift and UIKit.',
    image: twitterIosImg,
    githubUrl: 'https://github.com/vladi4560/Twitter_IOS',
    techStack: ['Swift', 'UIKit', 'iOS'],
    featured: true,
  },
  {
    id: 'legend-tales',
    title: 'Legend Tales',
    description: 'A C# / Unity RPG game — legend-driven quests, character progression, and narrative-focused adventure mechanics.',
    image: legendTalesImg,
    githubUrl: 'https://github.com/vladi4560/Legend_Tales',
    techStack: ['C#', 'Unity'],
    featured: true,
  },
];
