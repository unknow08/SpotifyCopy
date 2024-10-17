import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, songsData, assets } from '../assets/assets';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const [videoUrl, setVideoUrl] = useState('');
    const [artistInfo, setArtistInfo] = useState('');
    let player;

    // Obtener el URL del video desde la base de datos
    useEffect(() => {
        fetch(`/api/getVideoUrl/${id}`)
            .then(res => res.json())
            .then(data => {
                setVideoUrl(data.videoUrl);
            });

        // Obtener la información del cantante o grupo
        fetch(`/api/getArtistInfo/${id}`)
            .then(res => res.json())
            .then(data => {
                setArtistInfo(data.artistInfo);
            });
    }, [id]);

    // Cargar la API de YouTube cuando se carga la página
    useEffect(() => {
        window.onYouTubeIframeAPIReady = () => {
            player = new window.YT.Player('yt-player', {
                height: '500',
                width: '505',
                videoId: videoUrl.split('v=')[1],
                events: {
                    'onReady': onPlayerReady
                }
            });
        };
    }, [videoUrl]);

    // Reproducir el video cuando se le da play a una canción
    const onPlayerReady = (event) => {
        document.querySelectorAll('.song').forEach(song => {
            song.addEventListener('click', () => {
                event.target.playVideo(); // Reproducir el video cuando se selecciona la canción
            });
        });
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-8 mt-10">
                {/* Primera Columna - Contenido Actual */}
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
                        <p><b className="mr-4">#</b>Titulo</p>
                        <div></div>
                        <div></div>
                        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
                    </div>
                    <hr />
                    {
                        songsData.map((item, index) => (
                            <div key={index} className="song grid grid-cols-1 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                                <div className="flex items-center text-white">
                                    <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                                    <img className="inline w-10 mr-5" src={item.image} alt="" />
                                    <p>{item.name}</p>
                                </div>
                                <p></p>
                                <p className='sm:block'></p>
                                <p className="text-[15px] text-center">{item.duration}</p>
                            </div>
                        ))
                    }
                </div>

                {/* Segunda Columna - Nueva Información */}
                <div className="w-full md:w-1/2 bg-gray-800 p-4 rounded">
                    <div id="yt-player"></div> {/* Aquí se carga el video de YouTube */}
                    <h3 className="text-3xl font-bold mb-4">Más Información</h3>
                    <p>{artistInfo}</p> {/* Aquí se muestra la información del artista */}
                </div>
            </div>
        </>
    );
};

export default DisplayAlbum;
