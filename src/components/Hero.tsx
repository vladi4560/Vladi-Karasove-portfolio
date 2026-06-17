import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profile } from '../data/profile';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="dot-grid"
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="fade-in-up" style={{ maxWidth: '720px', position: 'relative' }}>
        <p style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Hello, world — I'm
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          {profile.name !== '[YOUR NAME]' ? profile.name : (
            <span className="gradient-text">Your Name</span>
          )}
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            fontWeight: 500,
            color: 'var(--accent-blue-light)',
            marginBottom: '1.5rem',
          }}
        >
          {profile.title !== '[YOUR TITLE]' ? profile.title : 'Fullstack Developer'}
          <span className="cursor-blink" style={{ color: 'var(--accent-gold)', marginLeft: '2px' }}>_</span>
        </h2>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
          {profile.tagline !== '[YOUR TAGLINE — e.g. "Building things for the web, one commit at a time."]'
            ? profile.tagline
            : 'Building things for the web — clean code, great UX, and a dash of TypeScript.'}
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent-blue)',
              color: '#fff',
              padding: '0.65rem 1.4rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'opacity 0.15s, transform 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
          >
            <GithubIcon size={18} /> View GitHub
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              padding: '0.65rem 1.4rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              border: '1px solid var(--border-card)',
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue-light)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            <Mail size={18} /> Get in touch
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToAbout}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          opacity: 0.6,
          transition: 'opacity 0.15s',
          animation: 'fadeInUp 1s ease 0.8s both',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
      >
        <ArrowDown size={18} style={{ animation: 'blink 2s ease-in-out infinite' }} />
        Scroll
      </button>
    </section>
  );
}
