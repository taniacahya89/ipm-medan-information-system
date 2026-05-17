import { useEffect, useRef } from 'react';

function animateCounter(el, target, decimals = 0, duration = 1000) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    el.textContent = (target * ease).toFixed(decimals).replace('.', ',');
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function StatisticCard({ num, label, animate = false }) {
  const numRef = useRef(null);

  useEffect(() => {
    if (!animate || !numRef.current) return;
    const raw = parseFloat(String(num).replace(',', '.'));
    if (!isNaN(raw) && raw > 10) {
      setTimeout(() => animateCounter(numRef.current, raw, 0, 1000), 600);
    }
  }, [num, animate]);

  return (
    <div>
      <div
        ref={numRef}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.2rem', fontWeight: 700,
          color: 'var(--teal)', lineHeight: 1,
        }}
      >
        {num}
      </div>
      <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
}
