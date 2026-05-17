import { useEffect, useRef, useState } from 'react';

const CIRCUMFERENCE = 2 * Math.PI * 35; // r=35

function animateCounter(el, target, duration = 1400) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    el.textContent = Math.round(target * ease);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function ProgressRing({ value, label, color, animate = false }) {
  const circleRef = useRef(null);
  const labelRef = useRef(null);
  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    if (!animate) return;
    setTimeout(() => {
      setOffset(CIRCUMFERENCE * (1 - value / 100));
      if (labelRef.current) animateCounter(labelRef.current, value);
    }, 200);
  }, [animate, value]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ position: 'relative', width: 90, height: 90 }}>
        <svg className="ring-svg" width="90" height="90" viewBox="0 0 90 90">
          <circle className="ring-bg" cx="45" cy="45" r="35" />
          <circle
            ref={circleRef}
            className="ring-fg"
            cx="45" cy="45" r="35"
            stroke={color}
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <div className="ring-label" ref={labelRef}>{animate ? 0 : value}</div>
      </div>
      <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', textAlign: 'center', maxWidth: 90 }}>
        {label}
      </div>
    </div>
  );
}
