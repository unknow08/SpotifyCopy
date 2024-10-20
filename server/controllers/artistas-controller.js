const {request, response} = require('express');
const artistaModel = require('../models/artistas-model.js');

const artistasGetAll = async (req=request, res=response) => {
    try{
        const artistas = await artistaModel.find();

        res.json({ok:true,
            data: artistas
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg:"Error, contacte al administrador"
        })
    }
}

const artistasGetBy_Id = async (req=request, res=response) => {
    const {id} = req.params();

    try{
        const artista = await artistaModel.findOne({_id: id});

        if(!artista){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el artista'
            });
        }

        res.json({ok:true,
            data: artista
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg:"Error, contacte al administrador"
        });
    }
}

const artistasGetByName = async (req=request, res=response) => {
    const {nombre} = req.body;
    try{
        const artista = await artistaModel.findOne({nombre:{ $regex: nombre, $options: 'i' }})

        if(!artista){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el artista'
            });
        }
        
        res.json({ok:true,
            data: artista
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg:"Error, contacte al administrador"
        });
    }
}

const artistasPost = async (req=request, res=response) =>{
    const newArtista = new artistaModel(req.body);

    try{
        const artistaExiste = await artistaModel.findOne({nombre:newArtista.nombre});

        if(artistaExiste){
            return res.status(418).json({ok:false,
                msg: "Ya existe un artista con este nombre"
            });
        }

        await newArtista.save();

        res.status(201).json({ok:true,
            msg: 'Creado con exito'
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg:"Error, contacte al administrador"
        });
    }
}

const artistasUpdate = async (req=request, res=response) => {
    const {id} = req.params;

    try{
        const artista = await artistaModel.findOne({_id:id});

        if(!artista){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el artista'
            })
        }

        await artistaModel.updateOne({_id:id}, req.body);

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

const artistasDelete = async (req=request, res=response) => {
    const {id} = req.params;

    try{
        const artista = await artistaModel.findOne({_id:id});

        if(!artista){
            return res.status(404).json({ok:false,
                msg: "Artista no encontrado"
            });
        }

        await artistaModel.deleteOne({_id:id});

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

module.exports = {
    artistasGetAll,
    artistasGetBy_Id,
    artistasGetByName,
    artistasPost,
    artistasUpdate,
    artistasDelete
}