import { AlertCircle, RefreshCw } from 'lucide-react';
import { projects as staticProjects } from '../data/projects';
import { profile } from '../data/profile';
import { useGithubRepos } from '../hooks/useGithubRepos';
import ProjectCard from './ProjectCard';

function SkeletonCard() {
  return (
    <div className="card" style={{ padding: '1.5rem' }}>
      <div className="skeleton" style={{ borderRadius: '0.5rem', aspectRatio: '16/9', marginBottom: '1rem' }} />
      <div className="skeleton" style={{ height: '1.1rem', borderRadius: '4px', marginBottom: '0.5rem', width: '70%' }} />
      <div className="skeleton" style={{ height: '0.8rem', borderRadius: '4px', marginBottom: '0.4rem' }} />
      <div className="skeleton" style={{ height: '0.8rem', borderRadius: '4px', width: '85%' }} />
    </div>
  );
}

export default function Projects() {
  const { projects, loading, error, source } = useGithubRepos(
    profile.githubUsername,
    staticProjects,
  );

  return (
    <section
      id="projects"
      style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem' }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <span className="section-heading">Projects</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            A selection of things I've built.
          </p>
          {source === 'github' && !loading && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--accent-gold)', background: 'rgba(245,185,66,0.1)', border: '1px solid rgba(245,185,66,0.25)', borderRadius: '9999px', padding: '0.15em 0.6em' }}>
              <RefreshCw size={11} /> Live from GitHub
            </span>
          )}
        </div>
      </div>

      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.75rem 1rem',
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: '0.5rem',
            color: '#fca5a5',
            fontSize: '0.82rem',
            marginBottom: '1.5rem',
          }}
        >
          <AlertCircle size={15} />
          GitHub API unavailable — showing curated projects instead.
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>

      {!loading && projects.length === 0 && (
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem 0' }}>
          No projects to display yet. Add some to <code>src/data/projects.ts</code>.
        </div>
      )}
    </section>
  );
}
