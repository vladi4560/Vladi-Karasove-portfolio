import { Mail, Send, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-card)',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <span className="section-heading" style={{ margin: '0 auto' }}>
          Get In Touch
        </span>

        <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem', lineHeight: 1.8, fontSize: '1rem' }}>
          I'm always open to discussing new projects, interesting ideas, or opportunities to be part of something great.
          Feel free to reach out — I'll do my best to reply promptly.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <MapPin size={14} color="var(--accent-purple)" />
          {profile.location}
        </div>

        {/* Email CTA */}
        <a
          href={`mailto:${profile.email}`}
          className="contact-cta"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginTop: '2rem',
            background: 'var(--accent-blue)',
            color: '#fff',
            padding: '0.8rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            transition: 'opacity 0.15s, transform 0.15s',
            boxShadow: '0 4px 16px rgba(59,130,246,0.2)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
        >
          <Send size={18} />
          {profile.email !== '[YOUR EMAIL]' ? `Say hello at ${profile.email}` : 'Send me an email'}
        </a>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <a
            href={`mailto:${profile.email}`}
            className="contact-social-link"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.15s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Mail size={18} /> Email
          </a>
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.15s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <GithubIcon size={18} /> GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.15s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
