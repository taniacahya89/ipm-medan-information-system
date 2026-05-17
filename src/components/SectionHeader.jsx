export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ marginBottom: subtitle ? '2.5rem' : '1rem' }}>
      {eyebrow && (
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: '0.1em',
          color: 'var(--teal)', textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          {eyebrow}
        </div>
      )}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '2rem', fontWeight: 600,
        color: 'var(--text)', marginBottom: subtitle ? '1rem' : 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '15.5px', color: 'var(--text-mid)',
          lineHeight: 1.75, maxWidth: 600,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
