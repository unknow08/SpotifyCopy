const Server = require('./db.js');

const server = new Server();

server.listen();

/*
const {artistasData} = require('./testData.js');
const artistaModel=require('./models/artistas-model.js');

async function insertarCanciones(){
    try{
        await artistaModel.insertMany(artistasData);
    }catch(e){
        console.log(e);
    }
    console.log("insertados con exito");
}

insertarCanciones();
*/