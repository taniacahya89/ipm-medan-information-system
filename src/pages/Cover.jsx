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
      {/* Hero */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: '6rem 2.5rem 4rem',
        background: 'var(--bg)',
        minHeight: 'calc(100vh - 60px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        {/* Grid BG */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(29,158,117,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }} />
        {/* Orbs */}
        <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', width: 500, height: 500, background: 'rgba(29,158,117,0.12)', right: -100, top: -100 }} />
        <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', width: 300, height: 300, background: 'rgba(93,202,165,0.1)', left: '20%', bottom: 0 }} />

        <div style={{ position: 'relative', maxWidth: 760 }}>
          <div className="fade-up fade-up-1" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: "'DM Mono', monospace",
            fontSize: '11.5px', color: 'var(--teal-dark)',
            background: 'var(--teal-light)',
            border: '1px solid rgba(29,158,117,0.25)',
            padding: '5px 14px', borderRadius: 100,
            marginBottom: '1.5rem', letterSpacing: '0.03em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
            Universitas Negeri Malang · Sistem Informasi Keruangan
          </div>

          <h1 className="fade-up fade-up-2" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 700, lineHeight: 1.15,
            color: 'var(--text)', marginBottom: '1.25rem',
          }}>
            Indeks Pembangunan<br /><span style={{ color: 'var(--teal)' }}>Manusia</span> (IPM)
          </h1>

          <p className="fade-up fade-up-3" style={{ fontSize: 17, color: 'var(--text-mid)', lineHeight: 1.75, maxWidth: 560, marginBottom: '2.5rem' }}>
            Analisis spasial dan kajian literatur mengenai Indeks Pembangunan Manusia
            dengan studi kasus <strong>Kota Medan, Sumatera Utara</strong> — mencakup dimensi
            kesehatan, pendidikan, dan pengeluaran.
          </p>

          <div className="fade-up fade-up-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <button
              onClick={() => navigate('/literatur')}
              style={{
                padding: '12px 28px', background: 'var(--teal)', color: 'white',
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                border: 'none', borderRadius: 10, cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.transform = 'none'; }}
            >
              Mulai Membaca →
            </button>
            <button
              onClick={() => navigate('/spasial')}
              style={{
                padding: '12px 28px', background: 'transparent', color: 'var(--text-mid)',
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 400,
                border: '1px solid var(--border-mid)', borderRadius: 10, cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; e.currentTarget.style.background = 'var(--teal-light)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-mid)'; e.currentTarget.style.color = 'var(--text-mid)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Lihat Peta Spasial
            </button>
          </div>

          <div className="fade-up fade-up-4" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
            {stats.map((s) => <StatisticCard key={s.label} num={s.num} label={s.label} animate />)}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '4rem 2.5rem' }}>
        <SectionHeader eyebrow="Navigasi" title="Isi Website" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginTop: '1.5rem' }}>
          {navCards.map((c) => <NavigationCard key={c.title} {...c} />)}
        </div>
      </div>

      <Footer />
    </div>
  );
}
