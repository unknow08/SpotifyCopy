import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {

    const { id } = useParams();
    const [album, setAlbum] = useState([]);
    const [videos, setVideos] = useState([]);

    const fetchAlbums = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/albums/' + id);
            const data = await response.json();
            setAlbum(data.data);  // Accede a 'data' desde el JSON recibido
        } catch (error) {
            console.error('Error fetching Album:', error);
        }
    }

    const fetchLista = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/listas/' + id);
            const data = await response.json();
            //console.log(data);
            fetchVideosLista(data.data.videos_id);  // Accede a 'data' desde el JSON recibido
        } catch (error) {
            console.error('Error fetching Album:', error);
        }
    }

    const fetchVideosLista = async (videos_id) => {
        try {
            const promises = videos_id.map((video_id) =>
                fetch('http://localhost:8080/api/videos/' + video_id).then((res) => res.json())
            );
            const videosData = await Promise.all(promises);  // Espera a que todas las solicitudes terminen
            setVideos(videosData.map(video => video.data));  // Guarda solo la parte de `data`
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    }

    useEffect(() => {
        fetchAlbums();
        fetchLista();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-8 mt-10">
                {/* Primera Columna - Contenido Actual */}
                <div className="w-full md:w-1/2">
                    <div className="mt-10 flex gap-8 flex-col">
                        <img className="w-48 rounded" src={album.img} alt="" />
                        <div className="flex flex-col">
                            <p>Playlist</p>
                            <h2 className="text-5xl font-bold mb-4">{album.nombre}</h2>
                            <h4>{album.descripcion}</h4>
                            <p className="mt-1">
                                <img className="inline-block w-5 mr-1" src={assets.spotify_logo} alt="" />
                                <b>Spotify 2.0</b>
                                • 1,000,000 likes • <b>50 songs,</b> about 2hr
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                        <p><b className="mr-4">#</b>Title</p>
                        <div></div>
                        <div></div>
                        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
                    </div>
                    <hr />
                    {
                        videos.map((video, index) => (
                            <div key={index} className="flex justify-between items-center p-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer w-full">
                                <div className="flex items-center text-white">
                                    <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                                    <img className="inline w-10 mr-5" src={video.img} alt="" />
                                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">{video.titulo}</p>
                                </div>
                                <p className="text-[15px] text-right w-[3rem]">{video.duracion}</p> {/* Duración alineada a la derecha */}
                            </div>

                        ))
                    }
                </div>

                {/* Segunda Columna - Nueva Información */}
                <div className="w-full md:w-1/2 bg-gray-800 p-4 rounded">
                    {/* Aquí agregas tu nueva información */}
                    <h3 className="text-3xl font-bold mb-4">Más Información</h3>
                    <p>Aquí puedes agregar otra columna con detalles adicionales o información relacionada.</p>
                </div>
            </div>

        </>
    )
}

export default DisplayAlbum
