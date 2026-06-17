import { skills } from '../data/skills';
import SkillsCloud from './SkillsCloud';

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-card)',
        borderBottom: '1px solid var(--border-card)',
        padding: '5rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-heading" style={{ margin: '0 auto' }}>
            Skills &amp; Technologies
          </span>
          <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem', fontSize: '0.95rem' }}>
            Technologies I work with — tag size reflects proficiency level.
          </p>
        </div>

        <SkillsCloud skills={skills} />

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2.5rem',
          }}
        >
          {[
            { label: 'Expert', weight: 5 },
            { label: 'Advanced', weight: 4 },
            { label: 'Proficient', weight: 3 },
            { label: 'Familiar', weight: 2 },
            { label: 'Learning', weight: 1 },
          ].map(({ label, weight }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span
                className="skill-tag"
                style={{
                  fontSize: `${0.65 + weight * 0.1}rem`,
                  padding: '0.1em 0.5em',
                  opacity: 0.6 + weight * 0.08,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
