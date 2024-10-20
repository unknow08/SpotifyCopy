import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import SearchBar from './SearchBar';

const DisplayHome = () => {
  // SearchBar ----------------------
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState('');
  // Datos BD -----------------------
  const [videos, setVideos] = useState([]);
  const [albums, setAlbums] = useState([]);

  // Metodos SearchBar---------------
  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      setCategory('');
      return;
    }

    const filteredAlbums = albums.filter(album =>
      album.nombre.toLowerCase().includes(query.toLowerCase())
    );

    const filteredSongs = videos.filter(song =>
      song.titulo.toLowerCase().includes(query.toLowerCase()) ||
      song.descripcion.toLowerCase().includes(query.toLowerCase())
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
      <SearchBar onSearch={handleSearch} /> {/* Añadir SearchBar aquí */}
      <div className='mb-4'>
        {category && <h1 className='my-5 font-bold text-2xl'>{category}</h1>} {/* Mostrar categoría */}
        <div className='flex flex-col'>
          {searchResults.length > 0 ? (
            searchResults.map((item, index) =>
              item.hasOwnProperty('image') ? (
                <AlbumItem key={index} name={item.nombre} desc={item.descripcion} id={item.id} image={item.img} />
              ) : (
                <SongItem key={index} name={item.titulo} desc={item.descripcion} id={item.id} image={item.img} />
              )
            )
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
