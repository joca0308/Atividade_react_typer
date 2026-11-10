export function Sobre() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1rem' }}>Sobre a Aplicação</h2>
      <p style={{ lineHeight: '1.6', color: '#374151', marginBottom: '1rem' }}>
        Esta aplicação web foi desenvolvida como parte da Atividade Prática Avaliativa de React.js.
      </p>
      <p style={{ lineHeight: '1.6', color: '#374151' }}>
        O projeto cumpre todos os requisitos obrigatórios, incluindo componentização funcional (5 componentes reutilizáveis), 
        passagem de propriedades via <strong>Props</strong>, renderização dinâmica com <code>.map()</code>, e navegação entre 5 rotas utilizando o <strong>React Router</strong> sem recarregamento da página.
      </p>
    </div>
  );
}
