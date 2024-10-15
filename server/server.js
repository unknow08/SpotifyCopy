const Server = require('./db.js');

const server = new Server();

server.listen();

/*
const videoModel=require('./models/videos-model.js');

async function insertarCanciones(){
    try{
        await videoModel.insertMany(videoData);
    }catch(e){
        console.log(e);
    }
    console.log("insertados con exito");
}

insertarCanciones();
*/