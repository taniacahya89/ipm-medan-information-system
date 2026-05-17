import { useState } from 'react';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

const litTabs = ['Pengertian IPM', 'Teori & Konsep', 'Indikator', 'Manfaat'];

function DefBox({ label, children }) {
  return (
    <div style={{ background: 'var(--teal-light)', borderLeft: '4px solid var(--teal)', borderRadius: '0 12px 12px 0', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--teal)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      <p style={{ fontSize: 15, color: 'var(--teal-deep)', lineHeight: 1.75 }}>{children}</p>
    </div>
  );
}

function ConceptCard({ icon, title, body }) {
  return (
    <div style={{ padding: '1.25rem', borderRadius: 12, border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
      <div style={{ fontSize: 22, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.65 }}>{body}</div>
    </div>
  );
}

export default function Literatur() {
  const [activeTab, setActiveTab] = useState('Pengertian IPM');

  return (
    <div style={{ minHeight: '100vh', paddingTop: 60 }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '4rem 2.5rem' }}>
        <SectionHeader
          eyebrow="Kajian Pustaka"
          title="Literatur"
          subtitle="Kajian komprehensif mengenai Indeks Pembangunan Manusia — dari pengertian dasar, teori dan konsep, indikator pengukuran, hingga manfaat praktisnya."
        />

        {/* Tab nav */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {litTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 18px', fontSize: '13.5px',
                border: '1px solid var(--border-mid)', borderRadius: 100,
                background: activeTab === tab ? 'var(--teal)' : 'var(--bg-card)',
                color: activeTab === tab ? 'white' : 'var(--text-mid)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >{tab}</button>
          ))}
        </div>

        {/* PENGERTIAN */}
        {activeTab === 'Pengertian IPM' && (
          <>
            <DefBox label="Definisi Resmi — UNDP">
              Indeks Pembangunan Manusia (IPM) atau Human Development Index (HDI) adalah indeks komposit yang mengukur capaian pembangunan manusia berdasarkan sejumlah komponen dasar kualitas hidup yang mencakup dimensi kesehatan, pendidikan, dan standar hidup layak.
            </DefBox>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: 15, color: 'var(--text-mid)', lineHeight: 1.8 }}>IPM pertama kali diperkenalkan oleh United Nations Development Programme (UNDP) pada tahun 1990 melalui laporan Human Development Report. Konsep ini dikembangkan oleh ekonom Pakistan Mahbub ul Haq dan Amartya Sen sebagai alternatif dari pengukuran pembangunan yang hanya berfokus pada pertumbuhan ekonomi (PDB).</p>
              <p style={{ fontSize: 15, color: 'var(--text-mid)', lineHeight: 1.8 }}>Di Indonesia, BPS (Badan Pusat Statistik) menghitung IPM setiap tahun di tingkat nasional, provinsi, hingga kabupaten/kota. Angka IPM berkisar antara 0 hingga 100, di mana semakin tinggi angkanya menunjukkan capaian pembangunan manusia yang lebih baik.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
              <ConceptCard icon="🌍" title="Dimensi Kesehatan" body="Diukur melalui Angka Harapan Hidup (AHH) saat lahir — mencerminkan kemampuan bertahan hidup penduduk." />
              <ConceptCard icon="📚" title="Dimensi Pendidikan" body="Diukur melalui Harapan Lama Sekolah (HLS) dan Rata-rata Lama Sekolah (RLS)." />
              <ConceptCard icon="💰" title="Dimensi Pengeluaran" body="Diukur melalui pengeluaran per kapita yang disesuaikan — mencerminkan standar hidup layak." />
            </div>
          </>
        )}

        {/* TEORI */}
        {activeTab === 'Teori & Konsep' && (
          <>
            <DefBox label="Landasan Teori">
              IPM didasarkan pada pendekatan kapabilitas (capability approach) yang dikembangkan oleh Amartya Sen — bahwa pembangunan sejati bukan hanya soal pertumbuhan ekonomi, melainkan perluasan kebebasan dan kemampuan manusia untuk menjalani hidup yang mereka nilai.
            </DefBox>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: '1.5rem' }}>
              <ConceptCard icon="🏛️" title="Capability Approach — Sen" body="Pembangunan diukur dari kemampuan (capabilities) manusia untuk mencapai fungsi-fungsi kehidupan yang mereka anggap berharga, bukan sekadar pendapatan." />
              <ConceptCard icon="👤" title="Human Development — Haq" body="Mahbub ul Haq menekankan bahwa tujuan pembangunan adalah manusia — kemampuannya memilih, bertindak, dan berkembang — bukan pertumbuhan GNP semata." />
              <ConceptCard icon="📐" title="Formula IPM" body="IPM = ∛(IK × IP × IPen) — rata-rata geometrik dari tiga indeks dimensi yang masing-masing bernilai 0–1." />
              <ConceptCard icon="🔄" title="Metode Baru (2010)" body="UNDP memperbarui formula IPM pada 2010: dari rata-rata aritmetik menjadi rata-rata geometrik untuk mengurangi substitutabilitas antar dimensi." />
              <ConceptCard icon="📊" title="Klasifikasi IPM" body="Sangat tinggi (≥80), Tinggi (70–79,99), Sedang (60–69,99), Rendah (<60) — berdasarkan kategorisasi UNDP dan BPS." />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: 15, color: 'var(--text-mid)', lineHeight: 1.8 }}>Teori di balik IPM mengakui bahwa kemajuan suatu bangsa tidak bisa hanya dilihat dari sisi ekonomi. Mahbub ul Haq berargumen bahwa tujuan utama pembangunan adalah manusia — bukan benda-benda. Oleh karena itu, indikator pembangunan harus langsung mengukur kualitas hidup manusia.</p>
              <p style={{ fontSize: 15, color: 'var(--text-mid)', lineHeight: 1.8 }}>Dalam konteks Kota Medan, teori ini relevan karena kota metropolitan sering kali menunjukkan paradoks: pertumbuhan ekonomi tinggi namun distribusi manfaatnya tidak merata secara spasial.</p>
            </div>
          </>
        )}

        {/* INDIKATOR */}
        {activeTab === 'Indikator' && (
          <>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'stretch', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { color: 'var(--teal)', code: 'IK — Indeks Kesehatan', name: 'Dimensi Kesehatan', fact: 'Indikator utama: Angka Harapan Hidup (AHH) saat lahir. Menggunakan batas atas 85 tahun dan batas bawah 20 tahun sesuai standar UNDP untuk normalisasi nilai 0–1.' },
                { color: 'var(--blue)', code: 'IP — Indeks Pendidikan', name: 'Dimensi Pendidikan', fact: 'Dua indikator: Harapan Lama Sekolah (HLS) anak usia 7 tahun dan Rata-rata Lama Sekolah (RLS) penduduk 25 tahun ke atas.' },
                { color: '#c07c18', code: 'IPen — Indeks Pengeluaran', name: 'Dimensi Pengeluaran', fact: 'Indikator: Pengeluaran per kapita disesuaikan (dalam ribu rupiah PPP), menggunakan data Susenas BPS dengan batas atas Rp 26,5 juta dan batas bawah Rp 1 juta.' },
              ].map((ind) => (
                <div key={ind.code} style={{ flex: 1, minWidth: 180, borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ padding: '1.25rem', background: ind.color, color: 'white', display: 'flex', gap: 10, alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, opacity: 0.75 }}>{ind.code}</div>
                      <div style={{ fontSize: '14.5px', fontWeight: 500 }}>{ind.name}</div>
                    </div>
                  </div>
                  <div style={{ padding: '1rem 1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderTop: 'none', borderRadius: '0 0 14px 14px' }}>
                    <div style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.6 }}>{ind.fact}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card">
              <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text)', marginBottom: 12 }}>Formula Perhitungan</div>
              <div style={{ background: 'var(--bg)', borderRadius: 8, padding: '1rem', fontFamily: "'DM Mono', monospace", fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 2 }}>
                IK = (AHH − 20) / (85 − 20)<br />
                IP = √(HLS/18 × RLS/15)<br />
                IPen = (ln(PPP) − ln(1.000)) / (ln(26.572) − ln(1.000))<br />
                <span style={{ color: 'var(--teal)', fontWeight: 500 }}>IPM = ∛(IK × IP × IPen) × 100</span>
              </div>
            </div>
          </>
        )}

        {/* MANFAAT */}
        {activeTab === 'Manfaat' && (
          <>
            <p style={{ fontSize: '15.5px', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              IPM bukan sekadar angka statistik — ia memiliki fungsi strategis dalam perencanaan dan evaluasi pembangunan.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { num: '01', title: 'Alat Ukur Kemajuan Pembangunan', body: 'IPM memungkinkan pemerintah mengukur kemajuan pembangunan manusia secara berkala dan membandingkannya antar wilayah maupun antar waktu, sehingga efektivitas kebijakan dapat dievaluasi secara objektif.' },
                { num: '02', title: 'Dasar Alokasi Dana Transfer Daerah', body: 'Di Indonesia, nilai IPM menjadi salah satu variabel dalam formula penghitungan Dana Alokasi Umum (DAU) — daerah dengan IPM rendah mendapat alokasi lebih besar sebagai upaya pemerataan.' },
                { num: '03', title: 'Identifikasi Ketimpangan Spasial', body: 'Analisis IPM berbasis spasial (seperti kajian Kota Medan ini) membantu mengidentifikasi wilayah yang tertinggal secara geografis — menjadi dasar prioritas intervensi pembangunan.' },
                { num: '04', title: 'Benchmark Internasional', body: 'IPM memungkinkan perbandingan kualitas pembangunan manusia antar negara, provinsi, atau kota secara setara — terlepas dari perbedaan skala ekonomi masing-masing wilayah.' },
                { num: '05', title: 'Panduan Perencanaan Kebijakan', body: 'Pemerintah daerah dapat menggunakan nilai tiap dimensi IPM (IK, IP, IPen) untuk menentukan sektor mana yang paling membutuhkan intervensi kebijakan — apakah kesehatan, pendidikan, atau peningkatan daya beli masyarakat.' },
              ].map((item) => (
                <div key={item.num} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '1rem 1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--teal)', lineHeight: 1, flexShrink: 0, minWidth: 28 }}>{item.num}</div>
                  <div>
                    <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text)', marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer subtitle="Kajian Literatur" />
    </div>
  );
}
