export default function Badge({ text, color }) {
  const badgeStyle = {
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '12px',
    backgroundColor: color || '#007bff',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 'bold'
  };

  return (
    <span style={badgeStyle}>
      {text}
    </span>
  );
}