//Ninte cambió algunas cosas aquí
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false); // Estado para hover

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex', // Usamos flexbox para centrar
        justifyContent: 'center', // Centrar horizontalmente

      }}
    >
      <div
        style={{
          transition: 'opacity 0.3s ease-in-out, background-color 0.3s ease-in-out',
          opacity: isHovered ? 1 : 0.3, // Mantener opacidad al hacer hover, le puse 0.3 pero se  podria poner 0.5 maomeno
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.2)', // Esta vaina le cambia el color cuando le haces hover
          borderRadius: '15px',
          padding: '10px',
          width: '300px', 
          height: '40px', 
        }}
        onMouseEnter={() => setIsHovered(true)} // Hover
        onMouseLeave={() => setIsHovered(false)} // Normaliño
      >
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar..."
          style={{
            width: '100%',
            height: '100%', 
            padding: '10px',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent', 
            color: 'black', 
            fontSize: '16px',
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
