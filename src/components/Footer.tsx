import { Code2, Heart } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();
  const name = profile.name !== '[YOUR NAME]' ? profile.name : 'Your Name';

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-card)',
        padding: '1.5rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
          <Code2 size={14} color="var(--accent-blue)" />
          <span>{name}</span>
        </div>

        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          Built with <Heart size={12} color="var(--accent-gold)" fill="var(--accent-gold)" /> using React &amp; Tailwind CSS
        </p>

        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.82rem' }}>
          © {year} {name}
        </p>
      </div>
    </footer>
  );
}
