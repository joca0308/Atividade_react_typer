import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: '#ef4444' }}>404</h1>
      <h2>Página Não Encontrada</h2>
      <p style={{ margin: '1rem 0 2rem', color: '#6b7280' }}>Ops! A rota que você tentou acessar não existe.</p>
      <Link to="/" style={{ color: '#2563eb', fontWeight: 'bold' }}>Voltar para a Página Inicial</Link>
    </div>
  );
}
