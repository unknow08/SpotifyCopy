const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    titulo:{
        type:String,
        require:true
    },
    artista:{
        type:String,
        require:true
    },
    genero:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    duracion: String,
    url:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    }
});

const videoModel = mongoose.model('video',videoSchema);

module.exports=videoModel;