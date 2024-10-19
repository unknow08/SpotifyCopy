// Nintenaya hizo algunos cambios aqui
import React, { useState } from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';
import SearchBar from './SearchBar';

const DisplayHome = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState('');

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      setCategory('');
      return;
    }

    const filteredAlbums = albumsData.filter(album =>
      album.name.toLowerCase().includes(query.toLowerCase())
    );

    const filteredSongs = songsData.filter(song =>
      song.name.toLowerCase().includes(query.toLowerCase()) || 
      song.desc.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredAlbums.length > 0) {
      setSearchResults(filteredAlbums);
      setCategory('Álbumes');
    } else if (filteredSongs.length > 0) {
      setSearchResults(filteredSongs);
      setCategory('Canciones');
    } else {
      setSearchResults([]);
      setCategory('No se encontraron resultados');
    }
  };

  return (
    <> 
      <Navbar />
      <SearchBar onSearch={handleSearch} /> {/* Añadir SearchBar aquí */}
      <div className='mb-4'>
        {category && <h1 className='my-5 font-bold text-2xl'>{category}</h1>} {/* Mostrar categoría */}
        <div className='flex flex-col'>
          {searchResults.length > 0 ? (
            searchResults.map((item, index) => 
              item.hasOwnProperty('image') ? (
                <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
              ) : (
                <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
              ) 
            )
          ) : (
            // Mostrar contenido predeterminado si no hay resultados de búsqueda
            <>
              <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
              {/* Renderizar álbumes destacados */}
              <div className='flex overflow-auto'>
                {albumsData.map((album) => (
                  <AlbumItem key={album.id} name={album.name} desc={album.desc} id={album.id} image={album.image} />
                ))}
              </div>
              <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
              {/* Renderizar canciones más populares */}
              <div className='flex overflow-auto'>
                {songsData.map((song) => (
                  <SongItem key={song.id} name={song.name} desc={song.desc} id={song.id} image={song.image} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
