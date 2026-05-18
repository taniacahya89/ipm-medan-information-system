import { useState } from 'react';
import Footer from '../components/Footer';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const tabs = [
  { key: 'ik',  label: 'Indeks Kesehatan (IK)',     color: '#185FA5', light: '#E6F1FB' },
  { key: 'ip',  label: 'Indeks Pendidikan (IP)',     color: '#1D9E75', light: '#E1F5EE' },
  {
    key: 'ipm',
    label: 'Indeks Pembangunan Manusia',
    color: '#BA7517',
    light: '#FAEEDA',
    intro: 'IPM (Indeks Pembangunan Manusia) adalah angka yang menggambarkan seberapa sejahtera dan berkualitas hidup warga di suatu daerah — dilihat dari umur panjang, pendidikan, dan kemampuan ekonomi. Skalanya 0–100. Makin tinggi, makin baik. IPM Medan di angka 82+ termasuk kategori sangat tinggi di Indonesia. Dua garis di grafik ini hampir berhimpit, artinya perhitungan mandiri sangat akurat dibanding data resmi BPS.',
  },
];

// layout: 'side'  → gambar kiri, keterangan kanan (untuk peta portrait/square)
//         'stack' → gambar atas, keterangan bawah  (untuk grafik landscape/horizontal)
//         'dual'  → dua gambar berdampingan, masing-masing dengan keterangan di bawah

const sections = {
  ik: [
    {
      layout: 'side',
      title: 'Fasilitas Kesehatan di Kota Medan',
      subtitle: 'Peta Dasimeterik Fasilitas Kesehatan di Kota Medan',
      img: '/peta-dasimeterik-fasilitas-kesehatan-di-kota-medan.jpeg',
      bullets: [
        'Kecamatan paling padat faskes (biru sangat gelap) terlihat di beberapa kecamatan di bagian tengah Medan, termasuk Medan Baru, Medan Polonia, dan Medan Kota.',
        'Medan Belawan di utara tampak biru sedang — faskes cukup tersedia sebagai kawasan pelabuhan yang padat penduduk.',
        'Beberapa kecamatan baru di pinggiran masih berwarna biru muda, artinya perlu penambahan fasilitas kesehatan.',
      ],
      accent: '#185FA5',
      accentLight: '#E6F1FB',
    },
    {
      layout: 'side',
      title: 'Praktik Dokter',
      subtitle: 'Peta Dasimeterik Praktik Dokter di Kota Medan',
      img: '/peta-dasimeterik-praktik-dokter-di-kota-medan.jpeg',
      bullets: [
        'Medan Deli tampak sebagai kecamatan paling padat praktik dokter (hijau sangat gelap), disusul beberapa kecamatan tengah kota.',
        'Kecamatan tengah seperti Medan Sunggal dan Medan Selayang juga memiliki warna hijau tua, mencerminkan banyaknya dokter yang berpraktik di sana.',
        'Kecamatan pinggiran seperti Medan Belawan dan Medan Tuntungan masih berwarna hijau muda — akses ke dokter swasta masih terbatas.',
      ],
      accent: '#1D9E75',
      accentLight: '#E1F5EE',
    },
    {
      layout: 'side',
      title: 'Pos Layanan Terpadu',
      subtitle: 'Peta Dasimeterik Pos Layanan Terpadu di Kota Medan',
      img: '/peta-dasimeterik-pos-layanan-terpadu-di-kota-medan.jpeg',
      bullets: [
        'Kecamatan paling padat posyandu (coklat sangat gelap) adalah Medan Belawan dan Medan Labuhan di utara — kawasan ini memiliki kepadatan posyandu tertinggi.',
        'Bagian tengah kota memiliki warna coklat sedang hingga gelap, menunjukkan posyandu cukup tersebar di sana.',
        'Kecamatan Medan Deli terlihat berwarna lebih pucat, menandakan kepadatan posyandu yang masih rendah di area tersebut.',
      ],
      accent: '#BA7517',
      accentLight: '#FAEEDA',
    },
  ],

  ip: [
    {
      layout: 'side',
      title: 'Sekolah',
      subtitle: 'Peta Dasimeterik Pendidikan Kota Medan',
      img: '/peta-dasimeterik-pendidikan-kota-medan.jpeg',
      bullets: [
        'Kecamatan Sangat Padat (warna merah tua) terlihat di wilayah tengah-utara, mencakup kecamatan seperti Medan Baru, Medan Selayang, dan sekitarnya — pusat kota dengan banyak sekolah.',
        'Kecamatan di utara seperti Medan Belawan dan Medan Labuhan cenderung lebih muda warnanya — menunjukkan kepadatan fasilitas pendidikan yang lebih rendah.',
        'Kecamatan pinggiran selatan (Medan Tuntungan, Medan Johor) juga cenderung masih sedikit padat dibanding pusat kota.',
      ],
      accent: '#185FA5',
      accentLight: '#E6F1FB',
    },
    {
      layout: 'side',
      title: 'Kepadatan Sekolah',
      subtitle: 'Peta Kernel Density Sekolah di Kota Medan',
      img: '/peta-kernel-density-sekolah-di-kota-medan.jpeg',
      bullets: [
        "Pusat kepadatan utama berada di kawasan tengah-timur Kota Medan (sekitar koordinat 3°36'N, 98°40'E). Terdapat satu titik merah gelap yang sangat mencolok, artinya di sini sekolah sangat terkonsentrasi.",
        'Zona merah muda luas mencakup hampir seluruh bagian tengah dan utara kota — artinya sekolah cukup tersebar, namun tidak sepadat pusat.',
        'Area tepi kota (barat jauh dan selatan) memiliki warna paling pucat, menandakan sekolah masih sedikit di sana.',
      ],
      accent: '#1D9E75',
      accentLight: '#E1F5EE',
    },
    {
      layout: 'dual',
      title: 'Sebaran Pelajar & Guru',
      subtitle: 'Peta Kernel Density Murid & Guru di Kota Medan',
      accent: '#534AB7',
      accentLight: '#EEEDFE',
      imgs: [
        {
          src: '/peta-kernel-density-murid-di-kota-medan.jpeg',
          label: 'Sebaran Murid',
          bullets: [
            'Sebaran murid lebih tersebar merata dibanding sekolah. Terlihat banyak titik-titik kecil berwarna ungu tua tersebar di area tengah dan selatan kota.',
            'Satu titik paling gelap muncul di tengah kota (sekitar Medan Kota/Medan Timur), menandakan konsentrasi murid tertinggi.',
            'Bagian utara (dekat Belawan) relatif lebih sepi murid meski wilayahnya luas.',
          ],
        },
        {
          src: '/peta-kernel-density-guru-di-kota-medan.jpeg',
          label: 'Sebaran Guru',
          bullets: [
            'Pola sebaran guru sangat mirip dengan peta sekolah — ini wajar, karena guru mengikuti keberadaan sekolah.',
            'Titik paling padat juga berada di kawasan tengah-timur Medan, dengan satu hotspot merah tua yang mencolok.',
            'Wilayah pinggiran seperti ujung selatan dan barat laut terlihat masih kekurangan guru (warna sangat pucat).',
          ],
        },
      ],
    },
  ],

  ipm: [
    {
      layout: 'stack',
      title: 'IPM Data dan IPM BPS',
      subtitle: 'Perbandingan IPM Perhitungan Mandiri vs Data Resmi BPS',
      img: '/ipm-data-dan-ipm-bps.jpeg',
      bullets: [
        'IPM Medan terus naik dari 81 (2019) ke 82,61 (2023).',
        'Ada sedikit penurunan di 2020 — wajar karena pandemi Covid-19 memukul ekonomi dan layanan kesehatan.',
        'Sejak 2021, tren langsung pulih dan makin bagus.',
      ],
      accent: '#BA7517',
      accentLight: '#FAEEDA',
    },
    {
      layout: 'stack',
      title: 'Sumber IPM',
      subtitle: 'Komponen Indeks Pembangunan Manusia',
      img: '/sumber-ipm.jpeg',
      imgCaption: 'Yang naik paling pesat: I_RLS (rata-rata lama sekolah) — artinya warga Medan makin berpendidikan dari tahun ke tahun. Yang paling stagnan: I_HLS — harapan lama sekolah sudah tinggi dan cenderung plateau. I_Pengeluaran sempat turun di 2020 (pandemi), tapi sudah pulih.',
      bullets: [
        'I_Kesehatan — seberapa panjang rata-rata umur warga Medan.',
        'I_HLS — berapa lama anak usia sekolah diharapkan mengenyam pendidikan.',
        'I_RLS — rata-rata lama sekolah warga dewasa (sudah bersekolah berapa tahun).',
        'I_Pendidikan — gabungan HLS dan RLS.',
        'I_Pengeluaran — kemampuan daya beli warga per tahun.',
      ],
      accent: '#1D9E75',
      accentLight: '#E1F5EE',
    },
    {
      layout: 'stack',
      title: 'Pengeluaran',
      subtitle: 'Tren Pengeluaran Per Kapita Kota Medan 2019–2023',
      img: '/pengeluaran.jpeg',
      bullets: [
        'Pengeluaran turun di 2020 dari Rp 15,559 juta ke Rp 15,213 juta — ini dampak langsung pandemi yang memangkas pendapatan banyak warga.',
        'Di 2022–2023 sudah melampaui level sebelum pandemi, mencapai Rp 16,010 juta/tahun.',
        'Tanda ekonomi Medan sudah pulih sepenuhnya.',
      ],
      accent: '#185FA5',
      accentLight: '#E6F1FB',
    },
  ],
};

/* ─── Sub-components ────────────────────────────────────────────────────── */

function BulletList({ bullets, accent }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {bullets.map((b, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span style={{
            flexShrink: 0, marginTop: 7,
            width: 6, height: 6, borderRadius: '50%',
            background: accent, display: 'inline-block',
          }} />
          <span style={{ fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.75 }}>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function CardHeader({ title, subtitle, accent }) {
  return (
    <div style={{
      padding: '1rem 1.5rem',
      borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: accent, flexShrink: 0 }} />
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>{title}</div>
        {subtitle && subtitle !== title && (
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 1 }}>{subtitle}</div>
        )}
      </div>
    </div>
  );
}

function IntroBox({ text, accent, accentLight }) {
  return (
    <div style={{
      margin: '1.25rem 1.5rem 0',
      padding: '0.9rem 1.1rem',
      background: accentLight,
      borderLeft: `3px solid ${accent}`,
      borderRadius: '0 10px 10px 0',
      fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.75,
    }}>
      {text}
    </div>
  );
}

function KeteranganBox({ bullets, accent, accentLight }) {
  return (
    <div style={{
      padding: '1rem 1.25rem',
      background: accentLight,
      borderRadius: 10,
    }}>
      <div style={{
        fontSize: 10, fontFamily: "'DM Mono', monospace",
        color: accent, letterSpacing: '0.12em',
        textTransform: 'uppercase', marginBottom: 10,
      }}>
        Keterangan
      </div>
      <BulletList bullets={bullets} accent={accent} />
    </div>
  );
}

// Layout: gambar kiri (55%), keterangan kanan (45%) — untuk peta portrait/square
function SideLayout({ section }) {
  const { title, subtitle, img, bullets, accent, accentLight } = section;
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)',
      borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: '1.5rem',
    }}>
      <CardHeader title={title} subtitle={subtitle} accent={accent} />
      <div className="side-layout-body" style={{ display: 'flex', minHeight: 320 }}>
        {/* Image — 55% */}
        <div className="side-layout-img" style={{ flex: '0 0 55%', position: 'relative' }}>
          <img
            src={img} alt={title}
            className="side-layout-img-el"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block', background: '#f5f5f3' }}
          />
        </div>
        {/* Divider */}
        <div className="side-layout-divider" style={{ width: 1, background: 'var(--border)', flexShrink: 0 }} />
        {/* Keterangan — 45% */}
        <div className="side-layout-text" style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            fontSize: 10, fontFamily: "'DM Mono', monospace",
            color: accent, letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: 12,
          }}>Keterangan</div>
          <BulletList bullets={bullets} accent={accent} />
        </div>
      </div>
    </div>
  );
}

// Layout: gambar atas (full width), keterangan bawah — untuk grafik landscape/horizontal
function StackLayout({ section }) {
  const { title, subtitle, img, intro, imgCaption, bullets, accent, accentLight } = section;
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)',
      borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: '1.5rem',
    }}>
      <CardHeader title={title} subtitle={subtitle} accent={accent} />

      {intro && <IntroBox text={intro} accent={accent} accentLight={accentLight} />}

      {/* Image full width */}
      <div className="stack-layout-img-wrap" style={{ position: 'relative', margin: '1.25rem 1.5rem 0' }}>
        <img
          src={img} alt={title}
          style={{
            width: '100%', height: 'auto',
            objectFit: 'contain', objectPosition: 'center',
            display: 'block', borderRadius: 10,
            border: '1px solid var(--border)',
            background: '#f5f5f3',
          }}
        />
      </div>

      {/* Caption below image */}
      {imgCaption && (
        <div style={{
          margin: '0.75rem 1.5rem 0',
          padding: '0.75rem 1rem',
          background: 'rgba(0,0,0,0.03)',
          borderRadius: 8,
          fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.65,
          fontStyle: 'italic',
        }}>
          {imgCaption}
        </div>
      )}

      {/* Keterangan below */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
        <KeteranganBox bullets={bullets} accent={accent} accentLight={accentLight} />
      </div>
    </div>
  );
}

// Layout: dua gambar berdampingan, masing-masing keterangan di bawah gambarnya
function DualLayout({ section }) {
  const { title, subtitle, imgs, accent, accentLight } = section;
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)',
      borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: '1.5rem',
    }}>
      <CardHeader title={title} subtitle={subtitle} accent={accent} />
      <div className="dual-layout-grid" style={{ padding: '1.25rem 1.5rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        {imgs.map((item) => (
          <div key={item.label} style={{
            border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden',
          }}>
            {/* Image */}
            <div style={{ position: 'relative', background: '#f5f5f3' }}>
              <img
                src={item.src} alt={item.label}
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'contain', display: 'block' }}
              />
              {/* Label badge */}
              <div style={{
                position: 'absolute', top: 10, left: 10,
                background: 'rgba(10,10,9,0.65)', backdropFilter: 'blur(6px)',
                borderRadius: 6, padding: '3px 10px',
                fontFamily: "'DM Mono', monospace", fontSize: 10,
                color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em',
              }}>
                {item.label.toUpperCase()}
              </div>
            </div>
            {/* Keterangan below each image */}
            <div style={{ padding: '1rem', background: accentLight }}>
              <div style={{
                fontSize: 10, fontFamily: "'DM Mono', monospace",
                color: accent, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: 8,
              }}>Keterangan</div>
              <BulletList bullets={item.bullets} accent={accent} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapCard({ section }) {
  if (section.layout === 'stack') return <StackLayout section={section} />;
  if (section.layout === 'dual')  return <DualLayout section={section} />;
  return <SideLayout section={section} />;
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function Spasial() {
  const [activeTab, setActiveTab] = useState('ik');
  const activeTabData = tabs.find(t => t.key === activeTab);

  return (
    <div style={{ minHeight: '100vh', paddingTop: 60 }}>
      {/* Header */}
      <div className="spasial-header" style={{
        padding: '3rem 2.5rem 2rem',
        background: 'linear-gradient(160deg, var(--purple-light) 0%, var(--bg) 60%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: 'var(--purple)', letterSpacing: '0.1em', marginBottom: 8,
          }}>
            INFORMASI SPASIAL · KOTA MEDAN
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.8rem', fontWeight: 600,
            color: 'var(--text)', marginBottom: 6,
          }}>
            Peta Distribusi Indeks IPM
          </h1>
          <p style={{ fontSize: '14.5px', color: 'var(--text-mid)' }}>
            Visualisasi sebaran spasial tiga dimensi IPM berdasarkan kecamatan di Kota Medan
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="spasial-tabs" style={{
        display: 'flex', gap: 4,
        padding: '1.25rem 2.5rem',
        borderBottom: '1px solid var(--border)',
        overflowX: 'auto',
      }}>
        {tabs.map(({ key, label, color, light }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              padding: '7px 18px', fontSize: '13.5px',
              fontWeight: activeTab === key ? 500 : 400,
              color: activeTab === key ? color : 'var(--text-muted)',
              background: activeTab === key ? light : 'none',
              border: activeTab === key ? `1px solid ${color}33` : '1px solid transparent',
              borderRadius: 8, cursor: 'pointer',
              transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Section label */}
      <div className="spasial-label" style={{ maxWidth: 860, margin: '0 auto', padding: '2rem 2.5rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
          <div style={{ width: 3, height: 20, borderRadius: 2, background: activeTabData.color }} />
          <div style={{
            fontSize: 13, fontFamily: "'DM Mono', monospace",
            color: 'var(--text-muted)', letterSpacing: '0.06em',
          }}>
            {activeTabData.label.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Map cards */}
      <div className="spasial-content" style={{ maxWidth: 860, margin: '0 auto', padding: '0 2.5rem 4rem' }}>
        {/* Tab intro — hanya untuk tab yang punya intro */}
        {activeTabData.intro && (
          <div style={{
            display: 'flex', gap: 14, alignItems: 'flex-start',
            padding: '1.1rem 1.25rem',
            background: activeTabData.light,
            border: `1px solid ${activeTabData.color}33`,
            borderLeft: `4px solid ${activeTabData.color}`,
            borderRadius: '0 12px 12px 0',
            marginBottom: '1.75rem',
          }}>
            <div style={{ fontSize: 22, flexShrink: 0, marginTop: 1 }}>💡</div>
            <p style={{
              margin: 0,
              fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.8,
            }}>
              {activeTabData.intro}
            </p>
          </div>
        )}

        {sections[activeTab].map((section, i) => (
          <MapCard key={i} section={section} />
        ))}
      </div>

      <Footer subtitle="Informasi Spasial" />
    </div>
  );
}
