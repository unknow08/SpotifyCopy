import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }

    })

    const play = () =>{
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () =>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause

    }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () => {
                setTime({ 
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
            
                })
            }
        },1000);

    },[audioRef])

    

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
------------------------------------------------------------------------------------------------------------------
//const PlayerContextProvider = ({ children }) => {
  const [track, setTrack] = useState({
    title: 'Canción 1',
    file: '/assets/song1.mp3',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1'  // Enlace de YouTube
  });
  const audioRef = useRef(null);

  const changeTrack = (newTrack) => {
    setTrack(newTrack);
  };

  return (
    <PlayerContext.Provider value={{ audioRef, track, changeTrack }}>
      {children}
    </PlayerContext.Provider>
  );
//};

changeTrack({
  title: 'Canción 2',
  file: '/assets/song2.mp3',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2'  // Nuevo video
});


export default PlayerContextProvider;
