# Personal Portfolio — Fullstack Developer

A clean, dark-themed personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tooling)
- **Tailwind CSS v4** (styling)
- **lucide-react** (icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run Locally

```bash
npm install
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Customising Your Content

All personal content lives in `src/data/`:

| File | What to edit |
|------|-------------|
| `src/data/profile.ts` | Name, title, bio, badges, GitHub username, LinkedIn URL, email |
| `src/data/skills.ts` | Tech skills with proficiency weight (1–5) |
| `src/data/projects.ts` | Featured/curated projects with title, description, tech stack, links |

### GitHub API Integration

Set your `githubUsername` in `src/data/profile.ts`. The site will automatically fetch your public repos, merge them with your manually curated list, and display them sorted by stars. If the API is unavailable (rate limit, offline), it falls back silently to the static data.

### Updating the Page `<title>` and Meta Description

Edit `index.html` — find the `<title>` and `<meta name="description">` tags.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel auto-detects Vite — no extra configuration needed.
4. Click **Deploy**. Done.

## Project Structure

```
src/
  components/
    Navbar.tsx        — Sticky nav with hamburger on mobile
    Hero.tsx          — Full-viewport landing section
    About.tsx         — Bio, role badges, stat cards
    Skills.tsx        — Section wrapper
    SkillsCloud.tsx   — Tag cloud (size/weight = proficiency)
    Projects.tsx      — Grid, loading skeletons, GitHub live data
    ProjectCard.tsx   — Individual project card
    Contact.tsx       — Email, GitHub, LinkedIn links
    Footer.tsx
  data/
    profile.ts        — Personal info
    skills.ts         — Skills list
    projects.ts       — Curated projects
  hooks/
    useGithubRepos.ts — GitHub REST API fetch with fallback
  index.css           — Tailwind + custom CSS variables & utilities
```
