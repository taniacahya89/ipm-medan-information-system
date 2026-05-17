import { useState } from 'react';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

const tabs = ['Bio', 'Achievement', 'Experience', 'Refleksi'];

const achievements = [
  { icon: '🏆', iconClass: 'gold', title: 'Kajian Spasial Terbaik', sub: 'Penghargaan atas analisis distribusi spasial IPM yang komprehensif dalam mata kuliah SIK', year: '2024' },
  { icon: '🗺️', iconClass: 'teal', title: 'Peta Kernel Density — Analisis Guru Kota Medan', sub: 'Berhasil menghasilkan visualisasi distribusi guru menggunakan metode Kernel Density Estimation', year: '2024' },
  { icon: '📚', iconClass: 'blue', title: 'Literatur Review IPM — Indeks Pembangunan Manusia', sub: 'Penyusunan kajian literatur komprehensif mencakup teori, konsep, indikator, dan manfaat IPM', year: '2024' },
  { icon: '📊', iconClass: 'gold', title: 'Dashboard SIK Interaktif', sub: 'Pengembangan dashboard berbasis data statistik dan spasial untuk visualisasi tiga dimensi IPM', year: '2024' },
];

const iconBg = { gold: 'var(--amber-light)', teal: 'var(--teal-light)', blue: 'var(--blue-light)' };
const iconColor = { gold: 'var(--amber)', teal: 'var(--teal)', blue: 'var(--blue)' };

const experiences = [
  { year: '2024 — Sekarang', title: 'Mahasiswa Aktif — Sistem Informasi Keruangan, UM', body: 'Menempuh pendidikan S1 dengan fokus pada analisis spasial, pemetaan digital, dan sistem informasi geografis. Aktif mengerjakan proyek berbasis data GIS dan statistik deskriptif.' },
  { year: '2024', title: 'Kajian IPM — Kota Medan', body: 'Melakukan analisis spasial distribusi guru, sekolah, dan fasilitas kesehatan di Kota Medan menggunakan metode Kernel Density Estimation dan peta choropleth tiga dimensi IPM.' },
  { year: '2023', title: 'Pengenalan GIS dan Analisis Spasial', body: 'Mempelajari dasar-dasar Geographic Information System (GIS), termasuk digitasi peta, analisis overlay, dan visualisasi data geospasial menggunakan perangkat lunak GIS.' },
  { year: '2022', title: 'Masuk Universitas Negeri Malang', body: 'Memulai studi di Program Studi Sistem Informasi Keruangan, Universitas Negeri Malang — dengan visi menggabungkan ilmu geografi dan teknologi informasi untuk analisis keruangan.' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('Bio');

  return (
    <div style={{ minHeight: '100vh', paddingTop: 60 }}>
      {/* Profile Hero */}
      <div style={{ padding: '4rem 2.5rem 2rem', background: 'linear-gradient(160deg, var(--teal-light) 0%, var(--bg) 60%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', maxWidth: 860, margin: '0 auto', flexWrap: 'wrap' }}>
          <div style={{
            width: 88, height: 88, borderRadius: '50%',
            border: '2.5px solid rgba(29,158,117,0.35)',
            boxShadow: '0 4px 18px rgba(29,158,117,0.18)',
            overflow: 'hidden', flexShrink: 0,
          }}>
            <img
              src="/foto-diri.jpeg"
              alt="Foto Profil"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Penulis</div>
            <div style={{ fontSize: 14, color: 'var(--teal-dark)', fontWeight: 500, marginBottom: 8 }}>Mahasiswa Sistem Informasi Keruangan</div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>Universitas Negeri Malang · Fakultas Ilmu Sosial</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
              {['Geografi', 'Statistik Spasial', 'GIS', 'IPM'].map(tag => (
                <span key={tag} style={{ fontSize: 12, padding: '3px 12px', borderRadius: 100, border: '1px solid var(--border-mid)', color: 'var(--text-mid)', background: 'var(--bg-card)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, padding: '1.25rem 2.5rem', borderBottom: '1px solid var(--border)', maxWidth: 860, margin: '0 auto', overflowX: 'auto' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '7px 18px', fontSize: '13.5px', fontWeight: activeTab === tab ? 500 : 400,
              color: activeTab === tab ? 'var(--teal-dark)' : 'var(--text-muted)',
              background: activeTab === tab ? 'var(--teal-light)' : 'none',
              border: activeTab === tab ? '1px solid rgba(29,158,117,0.2)' : '1px solid transparent',
              borderRadius: 8, cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}
          >{tab}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '4rem 2.5rem' }}>

        {/* BIO */}
        {activeTab === 'Bio' && (
          <>
            <SectionHeader eyebrow="Profil" title="Bio" />
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { label: 'Program Studi', val: 'Sistem Informasi Keruangan' },
                  { label: 'Universitas',   val: 'Universitas Negeri Malang' },
                  { label: 'Bidang Minat',  val: 'Geografi, GIS, Analisis Spasial' },
                  { label: 'Tahun Kajian',  val: '2024' },
                ].map(f => (
                  <div key={f.label}>
                    <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 4 }}>{f.label}</div>
                    <div style={{ fontSize: '14.5px', color: 'var(--text)' }}>{f.val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Saya adalah mahasiswa Sistem Informasi Keruangan yang memiliki ketertarikan mendalam terhadap analisis data spasial dan pembangunan manusia. Melalui kajian ini, saya berusaha memahami bagaimana distribusi sumber daya manusia — khususnya di bidang kesehatan dan pendidikan — tergambar secara geografis di wilayah Kota Medan.',
                'Kajian literatur ini merupakan bagian dari pembelajaran mata kuliah Sistem Informasi Keruangan, di mana saya menggabungkan pendekatan kuantitatif statistik dengan visualisasi peta untuk menyajikan informasi yang komprehensif mengenai Indeks Pembangunan Manusia.',
                'Kota Medan dipilih sebagai studi kasus karena merupakan salah satu kota metropolitan di luar Jawa dengan kompleksitas distribusi penduduk yang menarik untuk dikaji secara spasial.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15, color: 'var(--text-mid)', lineHeight: 1.8, margin: 0 }}>{p}</p>
              ))}
            </div>
          </>
        )}

        {/* ACHIEVEMENT */}
        {activeTab === 'Achievement' && (
          <>
            <SectionHeader eyebrow="Prestasi" title="Achievement" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {achievements.map((a) => (
                <div key={a.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '1.1rem 1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, background: iconBg[a.iconClass], color: iconColor[a.iconClass] }}>{a.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text)', marginBottom: 3 }}>{a.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{a.sub}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', fontFamily: "'DM Mono', monospace", fontSize: 12, color: 'var(--text-muted)', padding: '3px 10px', background: 'rgba(0,0,0,0.04)', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0 }}>{a.year}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* EXPERIENCE */}
        {activeTab === 'Experience' && (
          <>
            <SectionHeader eyebrow="Pengalaman" title="Experience" />
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              <div style={{ position: 'absolute', left: 7, top: 8, bottom: 0, width: 2, background: 'var(--border)' }} />
              {experiences.map((ex) => (
                <div key={ex.year} style={{ position: 'relative', marginBottom: '2rem' }}>
                  <div style={{ position: 'absolute', left: '-2rem', top: 6, width: 16, height: 16, borderRadius: '50%', background: 'var(--bg-card)', border: '2px solid var(--teal)', zIndex: 1 }} />
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11.5px', color: 'var(--teal)', marginBottom: 4 }}>{ex.year}</div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>{ex.title}</div>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.6 }}>{ex.body}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* REFLEKSI */}
        {activeTab === 'Refleksi' && (
          <>
            <SectionHeader eyebrow="Refleksi" title="Refleksi Akademik" />
            <div style={{ background: 'var(--teal-light)', borderLeft: '4px solid var(--teal)', borderRadius: '0 12px 12px 0', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--teal)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Catatan Reflektif</div>
              <p style={{ fontSize: 15, color: 'var(--teal-deep)', lineHeight: 1.75 }}>"Melalui kajian ini, saya menyadari bahwa data spasial bukan sekadar angka — melainkan cerminan nyata dari ketimpangan dan potensi pembangunan manusia di suatu wilayah."</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Proses pengerjaan kajian IPM Kota Medan membuka wawasan saya tentang betapa kompleksnya distribusi sumber daya manusia di kota besar. Peta Kernel Density yang saya hasilkan bukan sekadar visualisasi — ia menceritakan kisah tentang ketimpangan akses pendidikan antara pusat kota dan wilayah pinggiran.',
                'Salah satu temuan yang paling berkesan adalah bagaimana pola sebaran guru mengikuti pola sebaran sekolah secara konsisten, mencerminkan bahwa pembangunan infrastruktur pendidikan di Kota Medan masih terpusat di kawasan tengah-timur. Wilayah pinggiran seperti ujung selatan dan barat laut masih membutuhkan perhatian khusus.',
                'Kajian ini juga mengajarkan saya pentingnya triangulasi data — menggabungkan dimensi kesehatan (IK), pendidikan (IP), dan pengeluaran (IPen) untuk mendapatkan gambaran yang utuh tentang kualitas hidup manusia, bukan hanya memandang satu aspek saja.',
                'Ke depan, saya berharap dapat mengembangkan analisis ini dengan data time-series untuk melihat tren perubahan IPM dari waktu ke waktu, serta mengintegrasikan variabel tambahan seperti akses transportasi dan konektivitas digital.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15, color: 'var(--text-mid)', lineHeight: 1.8, margin: 0 }}>{p}</p>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer subtitle="About Me" />
    </div>
  );
}
