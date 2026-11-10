import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div style={{ padding: '3rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bem-vindo à Mantos Store! 👕</h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '2rem' }}>
        Sua loja definitiva para os mantos mais icônicos do futebol nacional e internacional.
      </p>
      <Link to="/produtos" style={{ background: '#16a34a', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
        Ver Mantos Disponíveis
      </Link>
    </div>
  );
}
