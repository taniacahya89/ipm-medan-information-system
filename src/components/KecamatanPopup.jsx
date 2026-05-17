import { useEffect } from 'react';
import ProgressRing from './ProgressRing';

const CIRCUMFERENCE = 2 * Math.PI * 35;

export default function KecamatanPopup({ kec, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!kec) return null;

  const ipm = Math.cbrt(kec.ik * kec.ip * kec.ipen);
  const cat = ipm >= 0.80 ? 'Sangat Tinggi' : ipm >= 0.70 ? 'Tinggi' : 'Sedang';
  const ipmStr = (ipm * 100).toFixed(2).replace('.', ',');

  const note = `${kec.name} mencatat nilai indeks kesehatan ${(kec.ik*100).toFixed(0)}, pendidikan ${(kec.ip*100).toFixed(0)}, dan pengeluaran ${(kec.ipen*100).toFixed(0)}. ` +
    (ipm >= 0.80
      ? 'Kecamatan ini termasuk kategori sangat tinggi dan menjadi salah satu wilayah unggul dalam pembangunan manusia di Kota Medan.'
      : ipm >= 0.70
        ? 'Kecamatan ini termasuk kategori tinggi, dengan ruang peningkatan terutama pada dimensi pendidikan dan pengeluaran.'
        : 'Kecamatan ini memerlukan intervensi kebijakan lebih intensif, khususnya pada akses layanan dasar.');

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
      }}
    >
      <div className="popup-box" style={{
        background: 'var(--bg-card)', borderRadius: 20,
        padding: '2rem', maxWidth: 480, width: '100%',
        position: 'relative', boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            width: 30, height: 30, borderRadius: '50%',
            background: 'rgba(0,0,0,0.06)', border: 'none', cursor: 'pointer',
            fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.35rem' }}>
          {kec.name}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          IPM: {ipmStr} · Kategori: {cat}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <ProgressRing value={Math.round(kec.ik * 100)} label="Indeks Kesehatan"   color="#1D9E75" animate />
          <ProgressRing value={Math.round(kec.ip * 100)} label="Indeks Pendidikan"  color="#185FA5" animate />
          <ProgressRing value={Math.round(kec.ipen * 100)} label="Indeks Pengeluaran" color="#BA7517" animate />
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.65 }}>{note}</div>
      </div>
    </div>
  );
}
