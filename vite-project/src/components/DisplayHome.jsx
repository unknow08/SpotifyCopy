//Ninte hizo aun mas cambios por aqui
import React, { useState } from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';
import SearchBar from './SearchBar';

const DisplayHome = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]); // Ahora puse fue un array de categorias, esto me deja poner las dos junticas

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      setCategories([]);
      return;
    }

    const filteredAlbums = albumsData.filter(album =>
      album.name.toLowerCase().includes(query.toLowerCase())
    );

    const filteredSongs = songsData.filter(song =>
      song.name.toLowerCase().includes(query.toLowerCase()) || 
      song.desc.toLowerCase().includes(query.toLowerCase())
    );

    // Aqui hice un array de categorias segun los resultados filtrados
    const newCategories = [];
    if (filteredAlbums.length > 0) {
      newCategories.push('Álbumes');
    }
    if (filteredSongs.length > 0) {
      newCategories.push('Canciones');
    }

    // aqui pude hacer funcionar mi idea de los resultados fusionados
    const combinedResults = [
      ...filteredAlbums.map(album => ({ ...album, type: 'album' })), // esto los distingue
      ...filteredSongs.map(song => ({ ...song, type: 'song' }))
    ];

    setSearchResults(combinedResults);
    setCategories(newCategories.length > 0 ? newCategories : ['No se encontraron resultados']);
  };

  return (
    <> 
      <Navbar />
      <SearchBar onSearch={handleSearch} /> {/* La barrita de búsqueda */}
      <div className='mb-4'>
        <div className='flex flex-wrap justify-start'>
        {searchResults.length > 0 ? (
          <>
            {categories.includes('Álbumes') && (
              <>
                <h1 className='my-5 font-bold text-2xl'>Álbumes</h1>
                {searchResults
                  .filter(item => item.type === 'album')
                  .map((album, index) => (
                    <AlbumItem key={index} name={album.name} desc={album.desc} id={album.id} image={album.image} />
                  ))}
              </>
            )}
            {categories.includes('Canciones') && (
              <>
                <h1 className='my-5 font-bold text-2xl'>Canciones</h1>
                {searchResults
                  .filter(item => item.type === 'song')
                  .map((song, index) => (
                    <SongItem key={index} name={song.name} desc={song.desc} id={song.id} image={song.image} />
                  ))}
              </>
            )}
          </>
        ) : (
          // Mostrar contenido predeterminado si no hay resultados de búsqueda
          <>
              <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
              <div className='flex overflow-auto'>
                {albums.map((album, index) => (<AlbumItem key={index} name={album.nombre} desc={album.descripcion} id={album._id} image={album.img} />))}
              </div>
              <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                  {videos.map((video, index) => (<SongItem key={index} name={video.titulo} desc={video.descripcion} image={video.img} />))}
                </div>
              </div>
            </>
        )}
      </div>
    </>
  );
};

export default DisplayHome;

