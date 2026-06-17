import { useState, useEffect } from 'react';
import type { Project } from '../data/projects';

interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
  language: string | null;
}

interface UseGithubReposResult {
  projects: Project[];
  loading: boolean;
  error: string | null;
  source: 'github' | 'static';
}

function repoToProject(repo: GithubRepo): Project {
  const techStack: string[] = [];
  if (repo.language) techStack.push(repo.language);
  repo.topics.slice(0, 4).forEach((t) => {
    const formatted = t.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    if (!techStack.includes(formatted)) techStack.push(formatted);
  });

  return {
    id: `gh-${repo.id}`,
    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    description: repo.description ?? 'No description provided.',
    githubUrl: repo.html_url,
    liveUrl: repo.homepage ?? undefined,
    techStack,
    featured: false,
  };
}

export function useGithubRepos(
  username: string,
  staticProjects: Project[],
  maxRepos = 6,
): UseGithubReposResult {
  const [state, setState] = useState<UseGithubReposResult>({
    projects: staticProjects,
    loading: false,
    error: null,
    source: 'static',
  });

  useEffect(() => {
    if (!username || username.startsWith('[')) {
      return;
    }

    let cancelled = false;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json() as Promise<GithubRepo[]>;
      })
      .then((repos) => {
        if (cancelled) return;

        const featuredIds = new Set(staticProjects.map((p) => p.id));

        const githubProjects = repos
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, maxRepos)
          .map(repoToProject);

        const merged: Project[] = [
          ...staticProjects,
          ...githubProjects.filter((p) => !featuredIds.has(p.id)),
        ].slice(0, maxRepos + staticProjects.length);

        setState({ projects: merged, loading: false, error: null, source: 'github' });
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : 'Unknown error';
        setState({ projects: staticProjects, loading: false, error: msg, source: 'static' });
      });

    return () => { cancelled = true; };
  }, [username]);

  return state;
}
