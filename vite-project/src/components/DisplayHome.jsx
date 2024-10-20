import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import SearchBar from './SearchBar';

const DisplayHome = () => {
  // SearchBar ----------------------
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]); // Ahora puse fue un array de categorias, esto me deja poner las dos junticas

  // Datos BD -----------------------
  const [videos, setVideos] = useState([]);
  const [albums, setAlbums] = useState([]);

  // Metodos SearchBar---------------
  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      setCategories([]);
      return;
    }

    const filteredAlbums = albums.filter(album =>
      album.nombre.toLowerCase().includes(query.toLowerCase())
    );

    const filteredSongs = videos.filter(song =>
      song.titulo.toLowerCase().includes(query.toLowerCase()) ||
      song.descripcion.toLowerCase().includes(query.toLowerCase())
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

  // Metdos Datos BD ---------------------------
  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/videos'); // Cambia la URL según tu backend
      const data = await response.json();
      //console.log(data.data);
      setVideos(data.data);  // Accede a 'data' desde el JSON recibido
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const fetchAlbums = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/albums'); // Cambia la URL según tu backend
      const data = await response.json();
      setAlbums(data.data);  // Accede a 'data' desde el JSON recibido
    } catch (error) {
      console.error('Error fetching Albums:', error);
    }
  }

  // useEffect para cargar los videos cuando el componente se monta
  useEffect(() => {
    fetchVideos();
    fetchAlbums();
  }, []);

  //console.log(videos);

  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} /> {/* La barrita de búsqueda */}
      <div className='mb-4'>
        <div className='flex flex-wrap justify-start'>
          {searchResults.length > 0 ? (
            <>
              {categories.includes('Álbumes') && (
                <div className='flex flex-wrap justify-star'>
                  <>
                    <div className='w-full'>
                      <h1 className='my-5 font-bold text-2xl'>Álbumes</h1>
                    </div>

                    {searchResults
                      .filter(item => item.type === 'album')
                      .map((item, index) => (
                        <div key={index} className="w-48 m-2"> {/* Envolver el SongItem en un div también */}
                          <AlbumItem name={item.nombre} desc={item.descripcion} id={item._id} image={item.img} />
                        </div>
                      ))}
                  </>
                </div>
              )}
              {categories.includes('Canciones') && (
                <div className='flex flex-wrap justify-star'>
                  <>
                    <div className='w-full'>
                      <h1 className='my-5 font-bold text-2xl'>Canciones</h1>
                    </div>
                    
                    {searchResults
                      .filter(item => item.type === 'song')
                      .map((item, index) => (
                        <div key={index} className="w-48 m-2 "> {/* Clase w-48 para el ancho y m-2 para el margen */}
                          <SongItem name={item.titulo} desc={item.descripcion} id={item._id} image={item.img} />
                        </div>
                      ))}
                  </>
                </div>
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
      </div>
    </>
  );
};

export default DisplayHome;

