import { useState } from 'react';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

const tabs = ['Bio', 'Achievement', 'Experience', 'Refleksi'];

/* ─── Achievement data ──────────────────────────────────────────────────── */
const achievements = [
  {
    img: '/HKI-Peta-Persebaran-Objek-Wisata-Desa-Dieng-2024.jpeg',
    caption: 'HKI Peta Persebaran Objek Wisata Desa Dieng (2024)',
    year: '2024',
  },
  {
    img: '/HKI-Poster-Mewujudkan-Green-Economy-Melalui-Pertanian-Berkelanjutan-di-Desa-Dayurejo (2025) .jpeg',
    caption: 'HKI Poster Mewujudkan Green Economy Melalui Pertanian Berkelanjutan di Desa Dayurejo (2025)',
    year: '2025',
  },
  {
    img: '/Juara-3-Podcast-Kompetisi-nasional-Geo-Science-(2024).jpeg',
    caption: 'Juara 3 Podcast Kompetisi nasional Geo-Science (2024)',
    year: '2024',
  },
  {
    img: '/Peserta-Podcast-Kompetisi-Compostion-(2025).jpeg',
    caption: 'Peserta Podcast Kompetisi Compostion (2025)',
    year: '2025',
  },
];

/* ─── Experience data ───────────────────────────────────────────────────── */
const magangItems = [
  'Seksi Pengadaan Tanah dan Pengembangan',
  'Membantu pembuatan peta zona nilai lahan (ZNT) berdasarkan peraturan BPN',
  'Melaksanakan survei lapangan terhadap harga tanah di Kota Malang',
  'Melakukan Entry Data harga tanah berdasarkan ketentuan dokumen resmi pertanahan',
  'Mendigitalkan batas bidang tanah dan data zonasi atribut Kantor Kabupaten',
  'Mendukung analisis spasial untuk perencanaan pengadaan lahan',
];

const kklItems = [
  [
    'Menyusun rencana kerja Divisi Kesehatan sebelum kegiatan KKL dilaksanakan, termasuk identifikasi potensi risiko kesehatan berdasarkan karakteristik lingkungan dataran tinggi dan mobilitas peserta.',
    'Melakukan pendataan riwayat kesehatan seluruh peserta sebagai langkah mitigasi terhadap kemungkinan gangguan kesehatan selama kegiatan berlangsung.',
    'Menyiapkan dan memastikan ketersediaan perlengkapan medis seperti kotak P3K, obat-obatan dasar, serta alat kesehatan pendukung lainnya.',
    'Memberikan himbauan kepada peserta terkait kesehatan serta adaptasi kondisi fisiologis di wilayah bersuhu rendah seperti kawasan Dieng.',
    'Melakukan pemantauan kondisi kesehatan peserta secara berkala selama kegiatan lapangan berlangsung.',
    'Menangani pertolongan pertama apabila terjadi cedera ringan, kelelahan, hipotermia, atau gangguan kesehatan lainnya di lokasi kegiatan.',
  ],
];

const orgItems2024 = [
  'Ketua Pelaksana Webinar Geographic Information System (WEBGIS) 2024',
  'Master of Ceremony (MC) National Geography Competition (NAGEON)',
  'Koordinator Sponsor — National Geography Competition (NAGEON)',
  'Sie Publikasi, Dekorasi, dan Dokumentasi (PDD) Mitigasi Bencana',
  'Koordinator Publikasi, Dekorasi, dan Dokumentasi (PDD) Geography Management Training (GMT)',
  'Koordinator Humas — Rapat Kerja (RAKER)',
  'Koordinator Sie Perlengkapan Volcano Scientific Competition 2024',
];

const orgItems2025 = [
  'Workshop GIS: Mengoordinasikan penyusunan proposal teknis, mengelola persuratan untuk pemateri (birokrasi kampus), serta menyusun laporan hasil pelatihan penguasaan teknologi geospasial bagi mahasiswa.',
  'Volcano Scientific Competition (VOSICO): Memastikan administrasi perlombaan karya tulis ilmiah, menyusun timeline kerja divisi, serta mengarsipkan seluruh dokumen pendaftaran dan penilaian peserta kompetisi.',
  'National Geography Competition (NAGEON): Mendampingi penyusunan instrumen administrasi kompetisi tingkat nasional, mengelola korespondensi dengan pihak sekolah/instansi luar, serta menyusun Laporan Pertanggungjawaban (LPJ) akhir kegiatan.',
  'Melakukan pemantauan berkala terhadap progres setiap proyek akademik (Workshop GIS, VOSICO, NAGEON) dan memastikan seluruh dokumentasi pertemuan tersimpan dengan sistematis.',
];

/* ─── Refleksi data ─────────────────────────────────────────────────────── */
const refleksiItems = [
  {
    label: 'Saat ini',
    text: 'Menilai pencapaian diri sebagai langkah yang luar biasa karena telah berani keluar dari zona nyaman. Dari seorang siswa kemudian menjadi mahasiswa yang fokus pada studi Geografi dan aktif dalam berbagai kegiatan.',
    icon: '🌱',
  },
  {
    label: '>5 tahun',
    text: 'Kehidupan yang seimbang (work-life balance), di mana pekerjaan selaras dengan rencana (passion) untuk melakukan perjalanan (traveling) ke berbagai destinasi wisata impian.',
    icon: '✈️',
  },
  {
    label: 'Masa kini',
    text: 'Terima kasih sudah bertahan, mari selesaikan walau langkahmu berat. Masih ada macha yang harus dicoba.',
    icon: '☕',
  },
  {
    label: 'Masa depan',
    text: 'Tetap menjadi pribadi yang baik, dan selalu "pulang dengan selamat."',
    icon: '🏠',
  },
  {
    label: 'Versi kecil',
    text: 'Terima kasih yaa sudah sampai dititik sekarangg.',
    icon: '💛',
  },
];

/* ─── Helper components ─────────────────────────────────────────────────── */

function BulletList({ items, accent = 'var(--teal)' }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span style={{
            flexShrink: 0, marginTop: 7,
            width: 5, height: 5, borderRadius: '50%',
            background: accent, display: 'inline-block',
          }} />
          <span style={{ fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.75 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ExpBlock({ label, title, children }) {
  return (
    <div style={{ position: 'relative', marginBottom: '2rem' }}>
      <div style={{ position: 'absolute', left: '-2rem', top: 6, width: 16, height: 16, borderRadius: '50%', background: 'var(--bg-card)', border: '2px solid var(--teal)', zIndex: 1 }} />
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11.5px', color: 'var(--teal)', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 10 }}>{title}</div>
      {children}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function About() {
  const [activeTab, setActiveTab] = useState('Bio');

  return (
    <div style={{ minHeight: '100vh', paddingTop: 60 }}>

      {/* ── Profile Hero ── */}
      <div className="about-header" style={{
        padding: '3.5rem 2.5rem 2rem',
        background: 'linear-gradient(160deg, var(--teal-light) 0%, var(--bg) 60%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', maxWidth: 860, margin: '0 auto', flexWrap: 'wrap' }} className="profile-hero-inner">
          {/* Avatar */}
          <div style={{
            width: 96, height: 96, borderRadius: '50%',
            border: '2.5px solid rgba(29,158,117,0.35)',
            boxShadow: '0 4px 20px rgba(29,158,117,0.18)',
            overflow: 'hidden', flexShrink: 0,
          }}>
            <img
              src="/foto-diri.jpeg"
              alt="Foto Profil"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Identity */}
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem', fontWeight: 700,
              color: 'var(--text)', marginBottom: 4,
            }}>
              Meylia Ardaneswari
            </div>
            <div style={{ fontSize: 14, color: 'var(--teal-dark)', fontWeight: 500, marginBottom: 3 }}>
              Departemen Geografi
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: 14 }}>
              Universitas Negeri Malang
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Geografi', 'GIS', 'Analisis Spasial', 'IPM'].map(tag => (
                <span key={tag} style={{
                  fontSize: 12, padding: '3px 12px', borderRadius: 100,
                  border: '1px solid var(--border-mid)',
                  color: 'var(--text-mid)', background: 'var(--bg-card)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="about-tabs" style={{
        display: 'flex', gap: 4,
        padding: '1.25rem 2.5rem',
        borderBottom: '1px solid var(--border)',
        maxWidth: 860, margin: '0 auto',
        overflowX: 'auto',
      }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '7px 18px', fontSize: '13.5px',
              fontWeight: activeTab === tab ? 500 : 400,
              color: activeTab === tab ? 'var(--teal-dark)' : 'var(--text-muted)',
              background: activeTab === tab ? 'var(--teal-light)' : 'none',
              border: activeTab === tab ? '1px solid rgba(29,158,117,0.2)' : '1px solid transparent',
              borderRadius: 8, cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="about-content" style={{ maxWidth: 860, margin: '0 auto', padding: '3rem 2.5rem 4rem' }}>

        {/* ── BIO ── */}
        {activeTab === 'Bio' && (
          <>
            <SectionHeader eyebrow="Profil" title="Bio" />
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="bio-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {[
                  { label: 'Nama',          val: 'Meylia Ardaneswari' },
                  { label: 'Departemen',    val: 'Geografi' },
                  { label: 'Universitas',   val: 'Universitas Negeri Malang' },
                  { label: 'Bidang Minat',  val: 'GIS, Analisis Spasial, Geografi' },
                  { label: 'Tahun Kajian',  val: '2024–2025' },
                ].map(f => (
                  <div key={f.label}>
                    <div style={{
                      fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500,
                      letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 4,
                    }}>
                      {f.label}
                    </div>
                    <div style={{ fontSize: '14.5px', color: 'var(--text)' }}>{f.val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Saya adalah mahasiswa Departemen Geografi Universitas Negeri Malang yang memiliki ketertarikan mendalam terhadap analisis data spasial dan pembangunan manusia. Melalui kajian ini, saya berusaha memahami bagaimana distribusi sumber daya manusia — khususnya di bidang kesehatan dan pendidikan — tergambar secara geografis di wilayah Kota Medan.',
                'Kajian literatur ini merupakan bagian dari pembelajaran mata kuliah Sistem Informasi Keruangan, di mana saya menggabungkan pendekatan kuantitatif statistik dengan visualisasi peta untuk menyajikan informasi yang komprehensif mengenai Indeks Pembangunan Manusia.',
                'Kota Medan dipilih sebagai studi kasus karena merupakan salah satu kota metropolitan di luar Jawa dengan kompleksitas distribusi penduduk yang menarik untuk dikaji secara spasial.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15, color: 'var(--text-mid)', lineHeight: 1.8, margin: 0 }}>{p}</p>
              ))}
            </div>
          </>
        )}

        {/* ── ACHIEVEMENT ── */}
        {activeTab === 'Achievement' && (
          <>
            <SectionHeader eyebrow="Prestasi" title="Achievement" />
            <div className="achievement-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}>
              {achievements.map((a, i) => (
                <div key={i} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow)',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-mid)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.09)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#f0f0ee' }}>
                    <img
                      src={a.img}
                      alt={a.caption}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    {/* Year badge */}
                    <div style={{
                      position: 'absolute', top: 10, right: 10,
                      fontFamily: "'DM Mono', monospace", fontSize: 11,
                      color: 'white', background: 'rgba(10,10,9,0.65)',
                      backdropFilter: 'blur(6px)',
                      padding: '3px 10px', borderRadius: 100,
                      letterSpacing: '0.06em',
                    }}>
                      {a.year}
                    </div>
                  </div>
                  {/* Caption */}
                  <div style={{ padding: '0.9rem 1.1rem' }}>
                    <div style={{ fontSize: '13.5px', color: 'var(--text)', lineHeight: 1.5 }}>{a.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── EXPERIENCE ── */}
        {activeTab === 'Experience' && (
          <>
            <SectionHeader eyebrow="Pengalaman" title="Experience" />

            {/* Intro paragraph — outside any section */}
            <p style={{
              fontSize: 15, color: 'var(--text-mid)', lineHeight: 1.8,
              marginBottom: '2.5rem', margin: '0 0 2.5rem',
            }}>
              Selama menempuh studi Geografi di Universitas Negeri Malang, saya aktif secara akademik dengan praktik langsung di lapangan serta kontribusi nyata dalam organisasi dan melaksanakan kegiatan magang mandiri untuk meningkatkan kemampuan saya.
            </p>

            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              {/* Timeline line */}
              <div style={{ position: 'absolute', left: 7, top: 8, bottom: 0, width: 2, background: 'var(--border)' }} />

              {/* Magang */}
              <ExpBlock label="2025" title="Magang Mandiri ATR/BPN — Kantor Pertanahan (ATR/BPN)">
                <BulletList items={magangItems} />
              </ExpBlock>

              {/* KKL 1 */}
              <ExpBlock label="2024" title="Kuliah Kerja Lapangan — Ketua Divisi Kesehatan (Dieng, Wonosobo & DIY)">
                <BulletList items={kklItems[0]} />
              </ExpBlock>

              {/* KKL 2 */}
              <ExpBlock label="2025" title="Kajian Antroposfer — Desa Dayurejo, Prigen, Pasuruan">
                <p style={{ fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.75, margin: '0 0 10px' }}>
                  Terlibat secara aktif dalam kegiatan observasi lapangan untuk mengidentifikasi praktik pertanian yang telah diterapkan oleh masyarakat setempat, khususnya yang berkaitan dengan prinsip pertanian berkelanjutan. Kegiatan ini meliputi pengumpulan data mengenai sistem budidaya, pemanfaatan sumber daya alam, serta pengelolaan limbah pertanian yang berpotensi mendukung konsep green economy di tingkat desa.
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>
                  Selain itu, saya turut berpartisipasi dalam proses wawancara dengan petani lokal guna memperoleh informasi terkait pola produksi, penggunaan pupuk organik, serta upaya efisiensi lahan yang dilakukan untuk menjaga keberlanjutan lingkungan. Data yang diperoleh kemudian dianalisis untuk mengetahui keterkaitan antara aktivitas pertanian dengan potensi peningkatan ekonomi masyarakat secara berkelanjutan.
                </p>
              </ExpBlock>

              {/* Organisasi 2024 */}
              <ExpBlock label="2024" title='HMD Geografi "Volcano" — Divisi Penalaran Bidang Jurnalistik'>
                <BulletList items={orgItems2024} />
              </ExpBlock>

              {/* Organisasi 2025 */}
              <ExpBlock label="2025" title='HMD Geografi "Volcano" — Sekretaris Bidang Penalaran'>
                <BulletList items={orgItems2025} />
              </ExpBlock>
            </div>
          </>
        )}

        {/* ── REFLEKSI ── */}
        {activeTab === 'Refleksi' && (
          <>
            <SectionHeader eyebrow="Refleksi" title="Gambaran Beberapa Masa dalam Kehidupan" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
              {refleksiItems.map((r, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                  padding: '1.1rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  boxShadow: 'var(--shadow)',
                }}>
                  {/* Icon */}
                  <div style={{
                    width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                    background: 'var(--teal-light)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20,
                  }}>
                    {r.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    {/* Label */}
                    <div style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 11,
                      color: 'var(--teal)', letterSpacing: '0.1em',
                      textTransform: 'uppercase', marginBottom: 5,
                    }}>
                      {r.label}
                    </div>
                    {/* Text */}
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.75 }}>
                      {r.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>

      <Footer subtitle="About Me" />
    </div>
  );
}
