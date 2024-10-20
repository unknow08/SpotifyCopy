const mongoose = require('mongoose');

const artistaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    oyentes:{
        type: BigInt,
        require: true,
    },
    descripcion:{
        type: String,
        require: false
    },
    img:{
        type: String,
        require: true
    }
});

const artistaModel = mongoose.model('artista',artistaSchema)

module.exports = artistaModel;