const { request,response } = require('express');
const albumModel = require('../models/albums-model.js');
const listaModel = require('../models/listas-model.js');


const albumsGetAll = async (req=request, res=response)=>{
    const albums = await albumModel.find();

    res.json({
        data:albums
    });
}

const albumsGetBy_Id = async (req=request,res=response)=>{
    const {id} = req.params;

    
        const album = await albumModel.findOne({_id:id})

        if(!album){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el album'
            })
        }

        res.json({ok:true,
            data: album
        });
}

const albumsGetByName = async (req=request,res=response)=>{
    const {nombre} = req.body;

    try{
        const album = await albumModel.findOne({nombre:{ $regex: nombre, $options: 'i' }});

        if(!album){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el album'
            })
        }

        res.json({ok:true,
            data: album
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }   
}

const albumsPost = async (req=request,res=response)=>{
    const newAlbum = new albumModel(req.body);
    
    try{
        const album_existe = await albumModel.findOne({nombre:newAlbum.nombre});

        if (album_existe){
            return res.status(418).json({ok:false,
                msg: "Ya existe un album con este nombre"
            });
        }

        await newAlbum.save();
        
        const lista = new listaModel({album_id:newAlbum._id});

        await lista.save();

        res.status(201).json({ok:true,
            msg: 'Creado con exito'
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
}

const albumsUpdate= async(req=request,res=response)=>{
    const {id} = req.params;

    try{
        const album = await albumModel.findOne({_id:id});

        if(!album){
            return res.status(404).json({ok:false,
                msg: "Album no encontrado"
            });
        }

        await albumModel.updateOne({_id:id},req.body);

        res.status(201).json({ok:true,
            msg: 'Actualizado con exito'
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
}

const albumsDelete = async (req=request, res=response)=>{
    const {id} = req.params;

    try{
        const album = await albumModel.findOne({_id:id});

        if(!album){
            return res.status(404).json({ok:false,
                msg: "Album no encontrado"
            });
        }

        const lista = await listaModel.findOne({album_id:id});
        if(lista){
            await listaModel.deleteOne({album_id:id});
        }

        await albumModel.deleteOne({_id:id});

        res.status(201).json({ok:true,
            msg: "Eliminado con exito"
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
}


module.exports={
    albumsGetAll,
    albumsGetBy_Id,
    albumsGetByName,
    albumsPost,
    albumsUpdate,
    albumsDelete
}