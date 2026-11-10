export function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        padding: '8px 16px', 
        background: '#16a34a', 
        color: '#fff', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer',
        fontWeight: 'bold',
        width: '100%'
      }}
    >
      {children}
    </button>
  );
}
