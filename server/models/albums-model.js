const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require:true
    },
    img: String,
    descripcion: String,
    color: String
});

const albumModel = mongoose.model('album', albumSchema);

module.exports=albumModel;