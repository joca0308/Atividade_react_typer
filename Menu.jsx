import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
      <Link to="/produtos" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Produtos</Link>
      <Link to="/sobre" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Sobre</Link>
      <Link to="/contato" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Contato</Link>
    </nav>
  );
}
