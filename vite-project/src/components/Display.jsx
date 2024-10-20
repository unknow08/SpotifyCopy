import React, { useState, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'


const Display = () =>{

    /* Metodo para conseguir el id del album actual */
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum? location.pathname.split("/").pop() : "";

    const fetchAlbum = async(id)=>{
        try {
          const response = await fetch('http://localhost:8080/api/albums/'+id);
          const data = await response.json();

          if (displayRef.current && data.data) {
            displayRef.current.style.background = `linear-gradient(${data.data.color || '#000'}, #121212)`;
          }
        } catch (error) {
          console.error('Error fetching Album:', error);
        }
    }

    useEffect(()=>{
        if (albumId !== "") {
            fetchAlbum(albumId);
        } else {
          // Restablece el fondo si no hay álbum
          if (displayRef.current) {
            displayRef.current.style.background = `#121212`;
          }
        }
    },[albumId])

  return(
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 '> 
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
        </Routes>
    </div>
  )
}

export default Display