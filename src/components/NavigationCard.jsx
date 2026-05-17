import { useNavigate } from 'react-router-dom';

export default function NavigationCard({ icon, title, desc, tags, to }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => navigate(to)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ fontSize: 22, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)', marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</div>
      <div style={{ fontSize: 12, color: 'var(--teal)', marginTop: 12, fontWeight: 500 }}>{tags} →</div>
    </div>
  );
}
