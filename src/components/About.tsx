import { User } from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <div id="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <span className="section-heading">About Me</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {profile.bio.map((para, i) => (
              <p key={i} style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Role badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {profile.badges.map((badge) => (
              <span key={badge} className="badge">
                <User size={12} />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Stats cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Built', value: '20+' },
            { label: 'Open Source Repos', value: '10+' },
            { label: 'Coffee / Day', value: '☕☕☕' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card"
              style={{ padding: '1.25rem', textAlign: 'center' }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-purple-light)', marginBottom: '0.4rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
