import { Menu } from './Menu';

export function Header() {
  return (
    <header style={{ background: '#1f2937', color: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>Mantos Store ⚽</h2>
      <Menu />
    </header>
  );
}
