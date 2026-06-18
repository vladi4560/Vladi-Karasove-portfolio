import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profile } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';
import luffyImg from '../assets/luffy-gear5.jpeg';

const TITLES = ['Straw Hat 🏴‍☠️', 'Full Stack Engineer'];

export default function Hero() {
  const subtitle = useTypewriter(TITLES);

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
        overflow: 'hidden',
      }}
    >
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(700px, 100vw)',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.06) 55%, transparent 80%)',
        pointerEvents: 'none',
      }} />

      <div
        className="fade-in-up hero-inner"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '720px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* ── Luffy Gear 5 image ── */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Outer pulse glow */}
          <div style={{
            position: 'absolute',
            inset: '-28px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(139,92,246,0.2) 45%, transparent 70%)',
            animation: 'gear5-pulse 3s ease-in-out infinite',
          }} />
          {/* Inner glow */}
          <div style={{
            position: 'absolute',
            inset: '-8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(168,139,250,0.14) 60%, transparent 80%)',
            animation: 'gear5-pulse 3s ease-in-out infinite 0.5s',
          }} />
          <img
            src={luffyImg}
            alt="Luffy Gear 5"
            style={{
              width: 'clamp(180px, 28vw, 300px)',
              height: 'auto',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3)) drop-shadow(0 0 48px rgba(168,139,250,0.45))',
              animation: 'luffy-float 4s ease-in-out infinite',
            }}
          />
        </div>

        {/* ── Text ── */}
        <p style={{
          color: 'var(--accent-purple)',
          fontWeight: 600,
          fontSize: '0.9rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          Hello, world — I'm
        </p>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 7vw, 4.8rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          margin: 0,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          {profile.name}
        </h1>

        <h2 style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          fontWeight: 500,
          color: 'var(--accent-blue-light)',
          margin: 0,
          minHeight: '1.8em',
        }}>
          {subtitle}
          <span className="cursor-blink" style={{ color: 'var(--accent-purple)', marginLeft: '2px' }}>|</span>
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          lineHeight: 1.75,
          margin: 0,
          maxWidth: '520px',
        }}>
          {profile.tagline}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--accent-blue)', color: '#fff',
              padding: '0.65rem 1.4rem', borderRadius: '0.5rem',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
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
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: 'var(--text-primary)',
              padding: '0.65rem 1.4rem', borderRadius: '0.5rem',
              fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
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
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          background: 'none', border: 'none',
          color: 'var(--text-muted)', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.3rem', fontSize: '0.75rem', letterSpacing: '0.08em',
          textTransform: 'uppercase', opacity: 0.6, transition: 'opacity 0.15s',
          animation: 'fadeInUp 1s ease 0.8s both',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
      >
        <ArrowDown size={18} style={{ animation: 'blink 2s ease-in-out infinite' }} />
        Scroll
      </button>

      <style>{`
        @keyframes gear5-pulse {
          0%, 100% { transform: scale(1);    opacity: 0.8; }
          50%       { transform: scale(1.07); opacity: 1;   }
        }
        @keyframes luffy-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
