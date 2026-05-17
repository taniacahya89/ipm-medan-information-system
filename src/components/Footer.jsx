export default function Footer({ subtitle = 'Indeks Pembangunan Manusia — Kota Medan' }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem 2.5rem',
      display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap',
      background: 'var(--bg-card)',
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: 'var(--text)', fontWeight: 600 }}>
        Literatur IPM
      </span>
      <span style={{ color: 'var(--border-mid)' }}>·</span>
      <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{subtitle}</span>
      <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-muted)', fontFamily: "'DM Mono', monospace" }}>
        students.um.ac.id · 2024
      </span>
    </footer>
  );
}
