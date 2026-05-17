import { useEffect, useRef } from 'react';

export default function KecamatanCard({ kec, delay = 0, onOpen }) {
  const ipm = Math.cbrt(kec.ik * kec.ip * kec.ipen);
  const cat = ipm >= 0.80 ? 'Sangat Tinggi' : ipm >= 0.70 ? 'Tinggi' : 'Sedang';
  const catColor = ipm >= 0.80 ? 'var(--teal-dark)' : ipm >= 0.70 ? 'var(--blue)' : 'var(--amber)';

  const bars = [
    { lbl: 'IK',   val: kec.ik,   color: '#1D9E75' },
    { lbl: 'IP',   val: kec.ip,   color: '#185FA5' },
    { lbl: 'IPen', val: kec.ipen, color: '#BA7517' },
  ];

  const barRefs = useRef([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      barRefs.current.forEach((el, i) => {
        if (el) el.style.width = (bars[i].val * 100) + '%';
      });
    }, 200 + delay * 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="card kec-card"
      onClick={() => onOpen(kec)}
      style={{
        cursor: 'pointer',
        borderRadius: 12,
        padding: '1rem',
        transition: 'all 0.2s',
      }}
    >
      <div style={{ fontSize: '13.5px', fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>
        {kec.name}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {bars.map((bar, i) => (
          <div key={bar.lbl} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', minWidth: 28 }}>{bar.lbl}</div>
            <div style={{ flex: 1, height: 6, background: 'rgba(0,0,0,0.06)', borderRadius: 100, overflow: 'hidden' }}>
              <div
                ref={el => barRefs.current[i] = el}
                className="kec-bar-fill"
                style={{ background: bar.color }}
              />
            </div>
            <div style={{ fontSize: '10.5px', fontFamily: "'DM Mono', monospace", color: 'var(--text-mid)', minWidth: 26, textAlign: 'right' }}>
              {bar.val.toFixed(2).replace('.', ',')}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, fontSize: '11.5px', fontWeight: 500, color: catColor }}>{cat}</div>
    </div>
  );
}
