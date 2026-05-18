import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { to: '/',          label: 'Cover' },
  { to: '/about',     label: 'About Me' },
  { to: '/literatur', label: 'Literatur' },
  { to: '/dashboard', label: 'Dashboard SIK' },
  { to: '/spasial',   label: 'Informasi Spasial' },
];

const logos = [
  { src: '/logo-geo.jpeg', alt: 'Logo Geografi' },
  { src: '/logo-fis.jpeg', alt: 'Logo FIS' },
  { src: '/logo-um.jpeg',  alt: 'Logo UM' },
];

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '60px',
      background: 'rgba(250,250,248,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center',
      padding: '0 2.5rem',
      gap: '1.5rem',
    }}>
      {/* Logo grup institusi — paling kiri */}
      <div className="nav-logo-group" style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
        {logos.map(({ src, alt }) => (
          <div
            key={src}
            title={alt}
            className="nav-logo-circle"
            style={{
              width: 34, height: 34,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1.5px solid var(--border)',
              background: '#fff',
              flexShrink: 0,
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src={src} alt={alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ width: 1, height: 28, background: 'var(--border)', flexShrink: 0 }} />

      {/* Brand */}
      <button
        onClick={() => navigate('/')}
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: "'Playfair Display', serif",
          fontSize: 18, fontWeight: 600,
          color: 'var(--text)', background: 'none', border: 'none',
          cursor: 'pointer', flexShrink: 0,
        }}
      >
        <div className="nav-brand-dot" style={{
          width: 10, height: 10, borderRadius: '50%',
          background: 'var(--teal)',
        }} />
        Literatur IPM
      </button>

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, overflowX: 'auto' }}>
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            style={({ isActive }) => ({
              padding: '6px 14px',
              fontSize: '13.5px',
              fontWeight: isActive ? 500 : 400,
              color: isActive ? 'var(--teal-dark)' : 'var(--text-muted)',
              borderRadius: 8,
              cursor: 'pointer',
              border: 'none',
              background: isActive ? 'var(--teal-light)' : 'none',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            })}
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Badge */}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 11, color: 'var(--text-muted)',
        background: 'rgba(0,0,0,0.04)',
        padding: '4px 10px', borderRadius: 100,
        border: '1px solid var(--border)',
        marginLeft: 'auto', flexShrink: 0,
      }}>
        UM · 2024
      </div>
    </nav>
  );
}
