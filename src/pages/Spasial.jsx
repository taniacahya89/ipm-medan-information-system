import { useState } from 'react';
import Footer from '../components/Footer';
import SpatialCard from '../components/SpatialCard';

const spasialTabs = [
  { key: 'ik',   label: 'Indeks Kesehatan (IK)' },
  { key: 'ip',   label: 'Indeks Pendidikan (IP)' },
  { key: 'ipen', label: 'Indeks Pengeluaran (IPen)' },
];

const findings = {
  ik: [
    { icon: '🏥', title: 'Temuan Utama — Distribusi Fasilitas Kesehatan', body: 'Fasilitas kesehatan (puskesmas, rumah sakit, klinik) terkonsentrasi di kawasan tengah-timur Kota Medan, menciptakan hotspot indeks kesehatan yang tinggi di wilayah tersebut. Wilayah pinggiran seperti Medan Belawan (utara) dan Medan Tuntungan (selatan) menunjukkan nilai IK yang lebih rendah akibat keterbatasan akses fasilitas kesehatan.' },
    { icon: '📍', title: 'Analisis Spasial — Pola Kernel Density', body: 'Peta Kernel Density menunjukkan pola sebaran yang tidak merata: satu hotspot utama berada di kawasan Medan Kota–Medan Baru, dengan nilai densitas menurun secara gradual ke arah pinggiran. Kecamatan di wilayah barat laut dan ujung selatan memerlukan intervensi kebijakan di bidang kesehatan.' },
  ],
  ip: [
    { icon: '📚', title: 'Temuan Utama — Distribusi Fasilitas Pendidikan', body: 'Sekolah menengah atas dan perguruan tinggi terkonsentrasi di kawasan pusat kota, menciptakan pola distribusi indeks pendidikan yang sangat tidak merata. Kecamatan pinggiran seperti Medan Belawan dan Medan Marelan menunjukkan nilai IP di bawah rata-rata kota.' },
    { icon: '🎓', title: 'Analisis Spasial — Pola Distribusi Guru', body: 'Peta distribusi tenaga pengajar menunjukkan ketimpangan yang signifikan: rasio guru per murid di kawasan tengah-timur jauh lebih baik dibandingkan kawasan barat laut dan selatan. Pola ini berkorelasi kuat dengan nilai Rata-rata Lama Sekolah (RLS) di masing-masing kecamatan.' },
  ],
  ipen: [
    { icon: '💰', title: 'Temuan Utama — Distribusi Daya Beli', body: 'Pengeluaran per kapita tertinggi terkonsentrasi di kecamatan pusat komersial (Medan Kota, Medan Baru, Medan Petisah), mencerminkan konsentrasi aktivitas ekonomi dan lapangan kerja formal di kawasan tersebut.' },
    { icon: '📊', title: 'Analisis Spasial — Korelasi Pengeluaran & Pendidikan', body: 'Terdapat korelasi positif yang kuat antara indeks pengeluaran dengan indeks pendidikan — kecamatan dengan daya beli tinggi cenderung memiliki capaian pendidikan yang lebih tinggi pula. Hal ini mengindikasikan pentingnya program sosial ekonomi yang mendorong peningkatan daya beli di wilayah pinggiran secara bersamaan dengan investasi pendidikan.' },
  ],
};

export default function Spasial() {
  const [activeTab, setActiveTab] = useState('ik');

  return (
    <div style={{ minHeight: '100vh', paddingTop: 60 }}>
      {/* Header */}
      <div style={{ padding: '3rem 2.5rem 2rem', background: 'linear-gradient(160deg, var(--purple-light) 0%, var(--bg) 60%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--purple)', letterSpacing: '0.1em', marginBottom: 8 }}>INFORMASI SPASIAL · KOTA MEDAN</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>Peta Distribusi Indeks IPM</h1>
          <p style={{ fontSize: '14.5px', color: 'var(--text-mid)' }}>Visualisasi sebaran spasial tiga dimensi IPM berdasarkan kecamatan di Kota Medan</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, padding: '1.25rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
        {spasialTabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              padding: '7px 18px', fontSize: '13.5px', fontWeight: activeTab === key ? 500 : 400,
              color: activeTab === key ? 'var(--teal-dark)' : 'var(--text-muted)',
              background: activeTab === key ? 'var(--teal-light)' : 'none',
              border: activeTab === key ? '1px solid rgba(29,158,117,0.2)' : '1px solid transparent',
              borderRadius: 8, cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}
          >{label}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '4rem 2.5rem' }}>
        <SpatialCard type={activeTab} />

        {findings[activeTab].map((f) => (
          <div key={f.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0, background: 'var(--teal-light)', color: 'var(--teal)' }}>{f.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{f.title}</div>
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.7, paddingLeft: 44 }}>{f.body}</div>
          </div>
        ))}
      </div>

      <Footer subtitle="Informasi Spasial" />
    </div>
  );
}
