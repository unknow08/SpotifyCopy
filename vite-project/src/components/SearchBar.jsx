import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className='flex justify-center mb-4'>
      <input
        type='text'
        value={query}
        onChange={handleSearch}
        placeholder='Buscar por artista, álbum o canción...'
        className='p-2 w-1/2 rounded border border-gray-300'
        style={{ color: 'black' }} 
      />
    </div>
  );
};

export default SearchBar;
