import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets } from '../assets/assets';
import { songsData } from '../assets/assets';
const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const [currentVideoId, setCurrentVideoId] = useState(''); // Estado para el ID del video actual
    const [player, setPlayer] = useState(null);
    const [isPlayerVisible, setIsPlayerVisible] = useState(false);

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
            createPlayer();
        }
    }, [currentVideoId]); // Solo se vuelve a crear el reproductor cuando el video ID cambia

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

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-8 mt-10">
                <div className="w-full md:w-1/2">
                    <div className="mt-10 flex gap-8 flex-col">
                        <img className="w-48 rounded" src={albumData.image} alt="" />
                        <div className="flex flex-col">
                            <p>Playlist</p>
                            <h2 className="text-5xl font-bold mb-4">{albumData.name}</h2>
                            <h4>{albumData.desc}</h4>
                            <p className="mt-1">
                                <img className="inline-block w-5 mr-1" src={assets.spotify_logo} alt="" />
                                <b>Spotify 2.0</b>
                                • 1,000,000 likes • <b>50 canciones,</b> unas 2hr
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                        <p><b className="mr-4">#</b>Título</p>
                        <div></div>
                        <div></div>
                        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
                    </div>
                    <hr />
                    {
                        songsData.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
                                onClick={() => handleSongClick(item.videoId)} // Asegúrate de que 'item.videoId' existe
                            >
                                <img className="rounded" src={item.image} alt="" />
                                <p className="font-bold mt-2 mb-1">{item.name}</p>
                                <p className="text-slate-200 text-sm">{item.desc}</p>
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
            </div>
        </>
    );
};

export default DisplayAlbum;
