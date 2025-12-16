import React from 'react';
import Badge from './Badge'; 

const getRoleColor = (rol) => {
  if (!rol) return '#888';
  switch (rol.toLowerCase()) {
    case 'familia':
      return '#ff5733'; // Rojo
    case 'trabajo':
      return '#3371ff'; // Azul
    case 'amigo':
      return '#33ff5e'; // Verde
    default:
      return '#888'; // Gris
  }
};

export default function ContactCard({ name, phone, email, rol, isFavorite }) {

    const roleColor = getRoleColor(rol);

  const cardStyle = {
    border: isFavorite ? '2px solid #ffd700' : '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: isFavorite ? '#fffef0' : '#fff'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 10px 0' }}>
        {name}
        <span style={{ marginLeft: '10px' }}>
          {isFavorite ? '⭐' : '☆'}
        </span>
      </h3>
        
      <Badge text={rol} color={roleColor} />

      <p style={{ margin: '5px 0', color: '#666' }}>📞 {phone}</p>
      <p style={{ margin: '5px 0', color: '#666' }}>✉️ {email}</p>
    </div>
  );
}