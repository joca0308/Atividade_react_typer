import { Card } from '../components/Card';

export function Produtos() {
  const listaProdutos = [
    { id: 1, titulo: "Manto Home 2026", descricao: "Camisa titular da Seleção Brasileira", preco: "R$ 299,90", imagem: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80" },
    { id: 2, titulo: "Manto Away 2026", descricao: "Camisa reserva estilizada azul", preco: "R$ 299,90", imagem: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=400&q=80" },
    { id: 3, titulo: "Manto Retrô 1970", descricao: "Edição histórica comemorativa amarela", preco: "R$ 349,90", imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&q=80" },
    { id: 4, titulo: "Manto Europeu Club", descricao: "Modelo edição especial Champions", preco: "R$ 319,90", imagem: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=400&q=80" },
    { id: 5, titulo: "Manto Terceiro Uniforme", descricao: "Design alternativo moderno e estiloso", preco: "R$ 289,90", imagem: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=400&q=80" },
    { id: 6, titulo: "Manto Edição Limitada", descricao: "Colecionador exclusivo numerado", preco: "R$ 399,90", imagem: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Nossos Mantos</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {listaProdutos.map((prod) => (
          <Card 
            key={prod.id}
            titulo={prod.titulo}
            descricao={prod.descricao}
            preco={prod.preco}
            imagem={prod.imagem}
          />
        ))}
      </div>
    </div>
  );
}
