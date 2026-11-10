export function Contato() {
  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Entre em Contato</h2>
      <form onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Nome:</label>
          <input type="text" placeholder="Seu nome" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>E-mail:</label>
          <input type="email" placeholder="Seu e-mail" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Mensagem:</label>
          <textarea placeholder="Sua mensagem" rows="4" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
        </div>
        <button type="submit" style={{ padding: '12px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
