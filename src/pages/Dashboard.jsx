import { useState } from 'react';
import {
  Chart as ChartJS,
  RadarController, LineController, BarController,
  CategoryScale, LinearScale,
  PointElement, LineElement, BarElement,
  RadialLinearScale,
  Filler, Legend, Tooltip,
} from 'chart.js';
import { Radar, Line, Bar } from 'react-chartjs-2';
import Footer from '../components/Footer';
import ProgressRing from '../components/ProgressRing';
import KecamatanCard from '../components/KecamatanCard';
import KecamatanPopup from '../components/KecamatanPopup';
import { kecData, trenData } from '../data/ipmData';

ChartJS.register(
  RadarController, LineController, BarController,
  CategoryScale, LinearScale,
  PointElement, LineElement, BarElement,
  RadialLinearScale,
  Filler, Legend, Tooltip,
);

const kpis = [
  { num: '80,97', label: 'IPM Kota Medan (2023)' },
  { num: '74,2',  label: 'AHH (tahun)' },
  { num: '14,3',  label: 'HLS (tahun)' },
  { num: '11,5',  label: 'RLS (tahun)' },
];

const TREN_COLORS = {
  ipm:  '#1C1C1A',
  ik:   '#1D9E75',
  ip:   '#185FA5',
  ipen: '#BA7517',
};
const TREN_LABELS = {
  ipm:  'IPM',
  ik:   'Indeks Kesehatan',
  ip:   'Indeks Pendidikan',
  ipen: 'Indeks Pengeluaran',
};

function buildTrenData(mode) {
  if (mode === 'all') {
    return {
      labels: trenData.labels,
      datasets: ['ipm', 'ik', 'ip', 'ipen'].map(k => ({
        label: TREN_LABELS[k],
        data: trenData[k],
        borderColor: TREN_COLORS[k],
        backgroundColor: TREN_COLORS[k] + '22',
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        borderWidth: 2,
      })),
    };
  }
  return {
    labels: trenData.labels,
    datasets: [{
      label: TREN_LABELS[mode],
      data: trenData[mode],
      borderColor: TREN_COLORS[mode],
      backgroundColor: TREN_COLORS[mode] + '22',
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      borderWidth: 2.5,
      pointHoverRadius: 7,
    }],
  };
}

const radarData = {
  labels: ['Kesehatan', 'Pendidikan', 'Pengeluaran'],
  datasets: [{
    label: 'Kota Medan 2023',
    data: [85, 79, 78],
    backgroundColor: 'rgba(29,158,117,0.15)',
    borderColor: '#1D9E75',
    borderWidth: 2,
    pointBackgroundColor: '#1D9E75',
    pointRadius: 5,
  }],
};

const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 1200, easing: 'easeOutQuart' },
  scales: {
    r: {
      min: 60,
      max: 100,
      ticks: { stepSize: 10, font: { family: 'DM Mono', size: 10 }, color: '#888780' },
      grid: { color: 'rgba(0,0,0,0.06)' },
      pointLabels: { font: { family: 'DM Sans', size: 13 }, color: '#555550' },
    },
  },
  plugins: { legend: { display: false } },
};

const trenOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 900, easing: 'easeOutQuart' },
  interaction: { mode: 'index', intersect: false },
  plugins: {
    legend: {
      display: true,
      labels: { font: { family: 'DM Sans', size: 12 }, color: '#555550', usePointStyle: true },
    },
    tooltip: {
      backgroundColor: 'rgba(28,28,26,0.9)',
      titleFont: { family: 'DM Sans' },
      bodyFont: { family: 'DM Mono' },
      cornerRadius: 8,
      padding: 10,
    },
  },
  scales: {
    x: {
      grid: { color: 'rgba(0,0,0,0.04)' },
      ticks: { font: { family: 'DM Mono', size: 11 }, color: '#888780' },
    },
    y: {
      grid: { color: 'rgba(0,0,0,0.04)' },
      ticks: { font: { family: 'DM Mono', size: 11 }, color: '#888780' },
      min: 65,
    },
  },
};

const barData = {
  labels: kecData.map(k => k.name.replace('Medan ', 'M. ')),
  datasets: [
    {
      label: 'IK',
      data: kecData.map(k => +(k.ik * 100).toFixed(1)),
      backgroundColor: 'rgba(29,158,117,0.75)',
      borderRadius: 5,
    },
    {
      label: 'IP',
      data: kecData.map(k => +(k.ip * 100).toFixed(1)),
      backgroundColor: 'rgba(24,95,165,0.75)',
      borderRadius: 5,
    },
    {
      label: 'IPen',
      data: kecData.map(k => +(k.ipen * 100).toFixed(1)),
      backgroundColor: 'rgba(186,117,23,0.75)',
      borderRadius: 5,
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 1000, easing: 'easeOutQuart' },
  interaction: { mode: 'index', intersect: false },
  plugins: {
    legend: {
      labels: { font: { family: 'DM Sans', size: 12 }, color: '#555550', usePointStyle: true },
    },
    tooltip: {
      backgroundColor: 'rgba(28,28,26,0.9)',
      titleFont: { family: 'DM Sans' },
      bodyFont: { family: 'DM Mono', size: 11 },
      cornerRadius: 8,
      padding: 10,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { family: 'DM Mono', size: 9 }, color: '#888780', maxRotation: 35 },
    },
    y: {
      grid: { color: 'rgba(0,0,0,0.04)' },
      ticks: { font: { family: 'DM Mono', size: 11 }, color: '#888780' },
      min: 60,
      max: 92,
    },
  },
};

const chartBox = (extra = {}) => ({
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 16,
  padding: '1.25rem',
  boxShadow: 'var(--shadow)',
  ...extra,
});

export default function Dashboard() {
  const [activeTren, setActiveTren] = useState('ipm');
  const [popup, setPopup] = useState(null);

  const handleBarClick = (_event, elements) => {
    if (elements.length > 0) {
      setPopup(kecData[elements[0].index]);
    }
  };

  const barOptionsWithClick = {
    ...barOptions,
    onClick: handleBarClick,
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: 60 }}>
      {/* Dark header */}
      <div className="dashboard-header" style={{ padding: '3rem 2.5rem 2rem', background: 'linear-gradient(160deg, #1C1C1A 0%, #2a2a28 100%)', color: 'white' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#5DCAA5', letterSpacing: '0.1em', marginBottom: 8 }}>
            DASHBOARD · SISTEM INFORMASI KERUANGAN
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Data &amp; Statistik IPM<br />Kota Medan
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
            Visualisasi data statistik dan spasial tiga dimensi Indeks Pembangunan Manusia
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="kpi-row">
            {kpis.map(k => (
              <div
                key={k.label}
                className="kpi-card"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: '1rem 1.25rem',
                  minWidth: 120,
                }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: '#5DCAA5', lineHeight: 1 }}>
                  {k.num}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts section */}
      <div className="dashboard-charts" style={{ maxWidth: 860, margin: '0 auto', padding: '2rem 2.5rem' }}>

        {/* Row 1: Radar + Rings */}
        <div className="chart-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
          {/* Radar */}
          <div style={chartBox()}>
            <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text)', marginBottom: 2 }}>
              Radar — Tiga Dimensi IPM
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
              Perbandingan nilai indeks kesehatan, pendidikan, pengeluaran
            </div>
            <div style={{ position: 'relative', height: 230 }}>
              <Radar data={radarData} options={radarOptions} />
            </div>
          </div>

          {/* Progress Rings */}
          <div style={chartBox()}>
            <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text)', marginBottom: 2 }}>
              Nilai Indeks per Dimensi
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
              Nilai normalisasi 0–100 masing-masing dimensi IPM
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
              <ProgressRing value={85} label="Indeks Kesehatan"   color="#1D9E75" animate />
              <ProgressRing value={79} label="Indeks Pendidikan"  color="#185FA5" animate />
              <ProgressRing value={78} label="Indeks Pengeluaran" color="#BA7517" animate />
            </div>
          </div>
        </div>

        {/* Tren chart */}
        <div style={{ ...chartBox(), marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 4 }}>
            <div>
              <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text)' }}>
                Tren IPM Kota Medan 2019–2023
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                Perkembangan nilai IPM dan komponen dimensi dari tahun ke tahun
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }} className="tren-filters">
              {[['ipm', 'IPM'], ['ik', 'Kesehatan'], ['ip', 'Pendidikan'], ['ipen', 'Pengeluaran'], ['all', 'Semua']].map(([key, lbl]) => (
                <button
                  key={key}
                  onClick={() => setActiveTren(key)}
                  style={{
                    padding: '5px 14px',
                    fontSize: '12.5px',
                    border: '1px solid var(--border-mid)',
                    borderRadius: 100,
                    background: activeTren === key ? 'var(--teal)' : 'var(--bg-card)',
                    color: activeTren === key ? 'white' : 'var(--text-mid)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {lbl}
                </button>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: 220 }}>
            <Line key={activeTren} data={buildTrenData(activeTren)} options={trenOptions} />
          </div>
        </div>

        {/* Bar chart kecamatan */}
        <div style={{ ...chartBox(), marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text)', marginBottom: 2 }}>
            Distribusi IPM per Kecamatan
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
            Klik bar kecamatan untuk melihat detail tiga dimensi indeks
          </div>
          <div style={{ position: 'relative', height: 260 }}>
            <Bar data={barData} options={barOptionsWithClick} />
          </div>
        </div>

        {/* Kec cards */}
        <div style={chartBox()}>
          <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text)', marginBottom: 2 }}>
            Detail Indeks per Kecamatan
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Klik kartu untuk melihat breakdown IK, IP, dan IPen secara visual
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
            {kecData.map((k, i) => (
              <KecamatanCard key={k.name} kec={k} delay={i * 0.04} onOpen={setPopup} />
            ))}
          </div>
        </div>
      </div>

      <Footer subtitle="Dashboard SIK" />
      {popup && <KecamatanPopup kec={popup} onClose={() => setPopup(null)} />}
    </div>
  );
}
