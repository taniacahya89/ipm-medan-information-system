import { useNavigate } from 'react-router-dom';
import StatisticCard from '../components/StatisticCard';
import NavigationCard from '../components/NavigationCard';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

const stats = [
  { num: '3',    label: 'Dimensi IPM' },
  { num: '21',   label: 'Kecamatan' },
  { num: '4',    label: 'Modul Kajian' },
  { num: '2024', label: 'Tahun Kajian' },
];

const navCards = [
  { icon: '👤', title: 'About Me',          desc: 'Bio, prestasi, pengalaman, dan refleksi akademik penulis.',                     tags: 'Bio · Achievement · Experience · Refleksi', to: '/about' },
  { icon: '📖', title: 'Literatur',          desc: 'Pengertian, teori, konsep, indikator, dan manfaat IPM.',                       tags: 'Pengertian · Teori · Indikator · Manfaat',  to: '/literatur' },
  { icon: '📊', title: 'Dashboard SIK',      desc: 'Visualisasi data statistik dan spasial Kota Medan.',                          tags: 'Statistik · Spasial · Data',                to: '/dashboard' },
  { icon: '🗺️', title: 'Informasi Spasial', desc: 'Peta distribusi Indeks Kesehatan, Pendidikan & Pengeluaran.',                  tags: 'IK · IP · IPen',                            to: '/spasial' },
];

export default function Cover() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', paddingTop: 60 }}>
      {/* Hero — full-bleed image with text overlay */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: 'calc(100vh - 60px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      }}>
        {/* Background image */}
        <img
          src="/medan-horizontal.png"
          alt="Kota Medan"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 35%',
            filter: 'saturate(0.75) brightness(0.55)',
            zIndex: 0,
          }}
        />

        {/* Gradient overlays */}
        {/* Bottom-up dark for text legibility */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(10,10,9,0.92) 0%, rgba(10,10,9,0.55) 45%, rgba(10,10,9,0.15) 75%, transparent 100%)',
        }} />
        {/* Left vignette */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to right, rgba(10,10,9,0.4) 0%, transparent 60%)',
        }} />
        {/* Subtle teal tint at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', zIndex: 1,
          background: 'linear-gradient(to top, rgba(15,110,86,0.18) 0%, transparent 100%)',
        }} />

        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 1.25rem 2.5rem', maxWidth: 900, width: '100%' }}
          className="cover-content"
        >

          {/* Eyebrow badge */}
          <div className="fade-up fade-up-1" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px', color: '#5DCAA5',
            background: 'rgba(29,158,117,0.18)',
            border: '1px solid rgba(93,202,165,0.35)',
            backdropFilter: 'blur(8px)',
            padding: '5px 14px', borderRadius: 100,
            marginBottom: '1.5rem', letterSpacing: '0.06em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5DCAA5', display: 'inline-block' }} />
            Universitas Negeri Malang · Sistem Informasi Keruangan
          </div>

          {/* Main heading — white on image */}
          <h1 className="fade-up fade-up-2" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
            fontWeight: 700, lineHeight: 1.1,
            color: '#FFFFFF',
            marginBottom: '1.25rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}>
            Indeks Pembangunan<br />
            <span style={{ color: '#5DCAA5' }}>Manusia</span>{' '}
            <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400, fontSize: '0.65em', fontFamily: "'DM Mono', monospace", letterSpacing: '0.04em' }}>(IPM)</span>
          </h1>

          {/* Location tag */}
          <div className="fade-up fade-up-2" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: "'DM Mono', monospace", fontSize: 12,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '1.25rem',
            letterSpacing: '0.08em',
          }}>
            <span style={{ fontSize: 14 }}>📍</span>
            KOTA MEDAN, SUMATERA UTARA
          </div>

          <p className="fade-up fade-up-3" style={{
            fontSize: 16, color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.75, maxWidth: 520, marginBottom: '2rem',
          }}>
            Analisis spasial dan kajian literatur mengenai Indeks Pembangunan Manusia —
            mencakup dimensi <strong style={{ color: 'rgba(255,255,255,0.9)' }}>kesehatan, pendidikan, dan pengeluaran</strong>.
          </p>

          {/* CTA buttons */}
          <div className="fade-up fade-up-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button
              onClick={() => navigate('/literatur')}
              style={{
                padding: '12px 28px', background: 'var(--teal)', color: 'white',
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                border: 'none', borderRadius: 10, cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: '0 4px 20px rgba(29,158,117,0.45)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.transform = 'none'; }}
            >
              Mulai Membaca →
            </button>
            <button
              onClick={() => navigate('/spasial')}
              style={{
                padding: '12px 28px', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)',
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 400,
                border: '1px solid rgba(255,255,255,0.25)', borderRadius: 10, cursor: 'pointer',
                transition: 'all 0.2s', backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            >
              Lihat Peta Spasial
            </button>
          </div>

          {/* Stats row */}
          <div className="fade-up fade-up-4" style={{
            display: 'flex', gap: '2rem', flexWrap: 'wrap',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#5DCAA5', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <div className="cover-nav-section" style={{ maxWidth: 860, margin: '0 auto', padding: '4rem 2.5rem' }}>
        <SectionHeader eyebrow="Navigasi" title="Isi Website" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginTop: '1.5rem' }}>
          {navCards.map((c) => <NavigationCard key={c.title} {...c} />)}
        </div>
      </div>

      <Footer />
    </div>
  );
}
