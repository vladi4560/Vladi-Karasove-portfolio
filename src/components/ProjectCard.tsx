import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
      {/* Thumbnail or placeholder */}
      {project.image ? (
        <div style={{ borderRadius: '0.5rem', overflow: 'hidden', aspectRatio: '16/9' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      ) : (
        <div
          style={{
            borderRadius: '0.5rem',
            aspectRatio: '16/9',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(245,185,66,0.06) 100%)',
            border: '1px solid var(--border-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FolderGit2 size={40} color="var(--accent-blue)" style={{ opacity: 0.4 }} />
        </div>
      )}

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {project.title}
        </h3>

        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65, flex: 1 }}>
          {project.description}
        </p>

        {/* Tech stack */}
        {project.techStack.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        )}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-card)' }}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            color: 'var(--text-muted)',
            fontSize: '0.82rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <GithubIcon size={15} /> GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--accent-blue-light)',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-blue-light)')}
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
