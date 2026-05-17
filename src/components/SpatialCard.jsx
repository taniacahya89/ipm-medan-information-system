import { useRef } from 'react';

function MapTooltip({ tooltipRef }) {
  return (
    <div ref={tooltipRef} className="map-tooltip" />
  );
}

export default function SpatialCard({ type }) {
  const tooltipRef = useRef(null);

  const configs = {
    ik: {
      gradId: 'heatTeal',
      bg: '#f0f7f4',
      ellipseFill: '#E1F5EE',
      ellipseStroke: '#5DCAA5',
      stops: [
        { offset: '0%', color: '#085041', opacity: 0.9 },
        { offset: '30%', color: '#1D9E75', opacity: 0.7 },
        { offset: '60%', color: '#5DCAA5', opacity: 0.4 },
        { offset: '100%', color: '#E1F5EE', opacity: 0.2 },
      ],
      compassColor: '#0F6E56',
      legend: [
        { color: '#085041', label: 'Sangat Tinggi (>0,85)' },
        { color: '#1D9E75', label: 'Tinggi (0,80–0,85)' },
        { color: '#5DCAA5', label: 'Sedang (0,75–0,80)' },
        { color: '#9FE1CB', label: 'Rendah (<0,75)' },
      ],
    },
    ip: {
      gradId: 'heatBlue',
      bg: '#f0f4f8',
      ellipseFill: '#E6F1FB',
      ellipseStroke: '#85B7EB',
      stops: [
        { offset: '0%', color: '#0C447C', opacity: 0.9 },
        { offset: '30%', color: '#185FA5', opacity: 0.7 },
        { offset: '60%', color: '#85B7EB', opacity: 0.4 },
        { offset: '100%', color: '#E6F1FB', opacity: 0.2 },
      ],
      compassColor: '#0C447C',
      legend: [
        { color: '#0C447C', label: 'Sangat Tinggi (>0,82)' },
        { color: '#185FA5', label: 'Tinggi (0,78–0,82)' },
        { color: '#85B7EB', label: 'Sedang (0,72–0,78)' },
        { color: '#C4DFFE', label: 'Rendah (<0,72)' },
      ],
    },
    ipen: {
      gradId: 'heatAmber',
      bg: '#fdf8f0',
      ellipseFill: '#FAEEDA',
      ellipseStroke: '#E8B86C',
      stops: [
        { offset: '0%', color: '#7a4e10', opacity: 0.9 },
        { offset: '30%', color: '#BA7517', opacity: 0.7 },
        { offset: '60%', color: '#E8B86C', opacity: 0.4 },
        { offset: '100%', color: '#FAEEDA', opacity: 0.2 },
      ],
      compassColor: '#7a4e10',
      legend: [
        { color: '#7a4e10', label: 'Sangat Tinggi (>0,80)' },
        { color: '#BA7517', label: 'Tinggi (0,76–0,80)' },
        { color: '#E8B86C', label: 'Sedang (0,70–0,76)' },
        { color: '#F5D9A8', label: 'Rendah (<0,70)' },
      ],
    },
  };

  const cfg = configs[type];
  const labelColor = type === 'ik' ? '#0F6E56' : type === 'ip' ? '#0C447C' : '#7a4e10';
  const lowColor = type === 'ik' ? '#9FE1CB' : type === 'ip' ? '#C4DFFE' : '#F5D9A8';

  const handleMouseMove = (e) => {
    if (!tooltipRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width * 0.55, cy = rect.height * 0.45;
    const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    const msg = dist < 60 ? '🔴 Densitas sangat tinggi'
      : dist < 120 ? '🟡 Densitas tinggi'
      : dist < 200 ? '🟢 Densitas sedang'
      : '⚪ Densitas rendah';
    tooltipRef.current.textContent = msg;
    tooltipRef.current.style.left = (x + 14) + 'px';
    tooltipRef.current.style.top = (y - 30) + 'px';
    tooltipRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (tooltipRef.current) tooltipRef.current.style.opacity = '0';
  };

  return (
    <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border)', marginBottom: '1.5rem', background: 'var(--bg-card)' }}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ height: 320, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'crosshair' }}
      >
        <svg style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id={cfg.gradId} cx="55%" cy="45%" r="50%">
              {cfg.stops.map((s, i) => (
                <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity} />
              ))}
            </radialGradient>
          </defs>
          <rect width="600" height="300" fill={cfg.bg} />
          <ellipse cx="310" cy="150" rx="240" ry="130" fill={cfg.ellipseFill} stroke={cfg.ellipseStroke} strokeWidth="1" />
          <ellipse cx="320" cy="140" rx="140" ry="80" fill={`url(#${cfg.gradId})`} opacity="0.7" />
          <ellipse cx="340" cy="130" rx="70" ry="45" fill={cfg.stops[0].color} opacity="0.5" />
          <text x="345" y="125" fontFamily="DM Mono, monospace" fontSize="10" fill="#fff" textAnchor="middle" opacity="0.9">Tinggi</text>
          <text x="310" y="175" fontFamily="DM Mono, monospace" fontSize="9" fill={labelColor} textAnchor="middle">Sedang</text>
          <text x="190" y="195" fontFamily="DM Mono, monospace" fontSize="9" fill={lowColor} textAnchor="middle">Rendah</text>
          <text x="460" y="210" fontFamily="DM Mono, monospace" fontSize="9" fill={lowColor} textAnchor="middle">Rendah</text>
          <text x="555" y="40" fontSize="14" fill={cfg.compassColor} fontWeight="bold" fontFamily="sans-serif">N</text>
          <line x1="558" y1="43" x2="558" y2="60" stroke={cfg.compassColor} strokeWidth="1.5" />
          <polygon points="558,43 554,55 558,52 562,55" fill={cfg.compassColor} />
        </svg>
        <MapTooltip tooltipRef={tooltipRef} />
      </div>
      <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-mid)' }}>
          Skala Indeks {type === 'ik' ? 'Kesehatan' : type === 'ip' ? 'Pendidikan' : 'Pengeluaran'}:
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {cfg.legend.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-muted)' }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: item.color, flexShrink: 0 }} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
