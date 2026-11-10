import { Button } from './Button';

export function Card({ titulo, imagem, descricao, preco }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px', width: '250px', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img src={imagem} alt={titulo} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        <h3 style={{ fontSize: '1.1rem', margin: '10px 0 5px' }}>{titulo}</h3>
        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '10px' }}>{descricao}</p>
      </div>
      <div>
        <p style={{ fontWeight: 'bold', color: '#16a34a', margin: '10px 0', fontSize: '1.1rem' }}>{preco}</p>
        <Button onClick={() => alert(`Você selecionou a camisa: ${titulo}!`)}>Comprar</Button>
      </div>
    </div>
  );
}
