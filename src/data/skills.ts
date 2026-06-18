export interface Skill {
  name: string;
  weight: 1 | 2 | 3 | 4 | 5;
}

export const skills: Skill[] = [
  // ── Frontend ──────────────────────────────
  { name: 'TypeScript',        weight: 5 },
  { name: 'React',             weight: 5 },
  { name: 'JavaScript',        weight: 5 },
  { name: 'React Native',      weight: 5 },
  { name: 'Expo',              weight: 5 },
  { name: 'Next.js',           weight: 4 },
  { name: 'Tailwind CSS',      weight: 4 },
  { name: 'NativeWind',        weight: 3 },
  { name: 'Expo Router',       weight: 3 },
  { name: 'EAS Build',         weight: 2 },

  // ── Backend ───────────────────────────────
  { name: 'Node.js',           weight: 5 },
  { name: 'Express.js',        weight: 4 },
  { name: 'REST APIs',         weight: 4 },
  { name: 'Firebase',          weight: 3 },
  { name: 'Google Functions',  weight: 2 },

  // ── Databases ─────────────────────────────
  { name: 'PostgreSQL',        weight: 5 },
  { name: 'Snowflake',         weight: 4 },
  { name: 'MongoDB',           weight: 3 },
  { name: 'MySQL',             weight: 3 },
  { name: 'MS SQL Server',     weight: 2 },
  { name: 'Pinata Cloud',      weight: 1 },

  // ── Mobile ────────────────────────────────
  { name: 'Swift',             weight: 4 },
  { name: 'SwiftUI',           weight: 3 },
  { name: 'Kotlin',            weight: 3 },
  { name: 'Jetpack Compose',   weight: 3 },
  { name: 'Push Notifications',weight: 2 },
  { name: 'App Store / Play Store', weight: 2 },

  // ── Ecosystems & Tools ────────────────────
  { name: 'Braze SDKs',        weight: 4 },
  { name: 'Web3 / Metamask',   weight: 2 },
  { name: 'Git & GitHub',      weight: 4 },
  { name: 'Jira / Bitbucket',  weight: 2 },
  { name: 'Liquid',            weight: 1 },

  // ── AI & Dev Tools ────────────────────────
  { name: 'Claude Code',       weight: 4 },
  { name: 'Agentic AI',        weight: 3 },
  { name: 'Cursor AI',         weight: 3 },

  // ── Engineering Principles ────────────────
  { name: 'SOLID',             weight: 3 },
  { name: 'MVVM / MVC',        weight: 3 },
  { name: 'OOP',               weight: 3 },
  { name: 'Design Patterns',   weight: 2 },
  { name: 'Multi-Threading',   weight: 2 },
  { name: 'OSI / Networking',  weight: 2 },
  { name: 'Java',              weight: 2 },
  { name: 'CI/CD',             weight: 1 },
];
