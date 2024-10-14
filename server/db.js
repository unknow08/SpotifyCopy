const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');


class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;

        this.path={
            videos: '/api/videos',
            albums: '/api/albums',
            listas: '/api/listas'
        }

        this.app.use(cors());
        this.app.use(express.json());
        //this.app.use(express.static('public'));

        this.db_connection();

        this.routes();
    }

    async db_connection(){
        try{
            const connect = await mongoose.connect(process.env.DB_URL);
            console.log('Conexion a la BD exitosa')
        }catch(err){
            console.log('Error al conectar a la BD \n',err);
        }
    }

    routes(){
        this.app.use(this.path.videos,require('./routes/videos-routes.js'));
        this.app.use(this.path.albums,require('./routes/albums-routes.js'));
        this.app.use(this.path.listas,require('./routes/listas-routes.js'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }
}

module.exports=Server;