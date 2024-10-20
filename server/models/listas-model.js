const mongoose = require('mongoose');

const listaSchema = new mongoose.Schema({
    album_nombre: String,
    album_id:{
        type:String,
        require:true
    },
    videos_id:{
        type: [String],
        require:false
    }
});

const listaModel = mongoose.model('lista',listaSchema);

module.exports=listaModel;