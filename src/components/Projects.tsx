import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad"
      style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <span className="section-heading">Projects</span>
        <p style={{ margin: '1.5rem 0 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          A selection of things I've built.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
