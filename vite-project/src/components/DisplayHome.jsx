import React, {useState,useEffect} from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'


const DisplayHome = () =>{
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/videos'); // Cambia la URL según tu backend
      const data = await response.json();
      setVideos(data.data);  // Accede a 'data' desde el JSON recibido
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  // useEffect para cargar los videos cuando el componente se monta
  useEffect(() => {
    fetchVideos();
  }, []);

  console.log(videos);

  return(
    <> 
       <Navbar />
       <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
            {albumsData.map((item, index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
       </div>
       <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
            {videos.map((video, index)=>(<SongItem key={index} name={video.titulo} desc={video.descripcion} image={video.img}/>))}
        </div>
       </div>
    </>
  )
}

export default DisplayHome