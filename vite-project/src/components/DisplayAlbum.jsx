import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {

    const { id } = useParams();

    // Reproductor -------------------------------------
    const albumData = albumsData[id];
    const [currentVideoId, setCurrentVideoId] = useState(''); // Estado para el ID del video actual
    const [player, setPlayer] = useState(null);
    const [isPlayerVisible, setIsPlayerVisible] = useState(false);
    // Album y videos DB ------------------------------------
    const [album, setAlbum] = useState([]);
    const [videos, setVideos] = useState([]);

    // Metodos reproductor
    const onPlayerError = (event) => {
        console.error('Error de YouTube Player:', event.data);
        alert('Error al intentar reproducir el video. Código de error: ' + event.data);
    };

    const onPlayerReady = (event) => {
        if (currentVideoId) {
            event.target.loadVideoById(currentVideoId);
            console.log('Reproduciendo video ID:', currentVideoId);
        }
    };

    // Manejar el clic en la canción
    const handleSongClick = (videoId) => {
        console.log('Video ID al hacer clic:', videoId); // Verifica que el ID se pase correctamente
        if (videoId) {
            setCurrentVideoId(videoId);
            setIsPlayerVisible(true); // Hacer el reproductor visible
        } else {
            console.error('El ID del video no está definido.'); // Esto indica que el videoId está vacío
        }
    };

    // Metodos datos BD --------------------------------------
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

    // Fetch DB
    useEffect(() => {
        fetchAlbums();
        fetchLista();
    }, []);

    // Fetch yotube (reproductor)
    // Cargar la API de YouTube
    useEffect(() => {
        const loadYouTubeAPI = () => {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
        };

        // Cargar la API solo una vez
        if (!window.YT) {
            loadYouTubeAPI();
        }

        // Crear el reproductor cuando la API esté lista
        const createPlayer = () => {
            if (currentVideoId) {
                const ytPlayer = new window.YT.Player('yt-player', {
                    height: '500',
                    width: '505',
                    videoId: currentVideoId,
                    events: {
                        'onReady': onPlayerReady,
                        'onError': onPlayerError,
                    },
                });
                setPlayer(ytPlayer);
                console.log('Reproductor de YouTube creado:', ytPlayer);
            }
        };

        // Verificar si la API de YouTube está lista y hay un video ID actual
        if (window.YT && currentVideoId) {
            if (player) {
                // Reutilizamos el reproductor si ya está creado
                player.loadVideoById(currentVideoId);
                console.log('Cambiando a video ID:', currentVideoId);
            } else {
                // Crear el reproductor si aún no existe
                createPlayer();
            }
        }
    }, [currentVideoId]);

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-8 mt-10">
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
                            <div key={index} className="flex justify-between items-center p-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer w-full" onClick={() => handleSongClick(video.url.split('=').pop())}>
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
            {isPlayerVisible && (
                <div className="w-full md:w-1/2 bg-gray-800 p-4 rounded">
                    <div id="yt-player"></div> {/* Contenedor para el reproductor de YouTube */}
                    <h3 className="text-3xl font-bold mb-4">Más Información</h3>
                    <p>Información adicional sobre el álbum o artista.</p>
                </div>
            )}
        </div >

        </>
    )
}

export default DisplayAlbum
