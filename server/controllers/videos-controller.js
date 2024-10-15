const {request,response} = require('express');
const videoModel = require('../models/videos-model.js');

const videosGetAll = async (req=request,res=response) =>{
    try{
        const videos = await videoModel.find();

        res.json({ok:true,
            data: videos
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg:"Error, contacte al administrador",
            error: e
        })
    }
};

const videosGetBy_Id = async(req=request, res=response) =>{
    const {id} = req.params;

    try{
        const video = await videoModel.findOne({_id:id});

        if (!video){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el video'
            })
        }

        res.json({ok:true, data: video});
    }catch (e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
};

const videosGetByTitulo = async(req=request, res=response)=>{
    const {busqueda} = req.body;

    try{
        const videos = await videoModel.find({titulo:{ $regex: busqueda, $options: 'i' }});

        if (!videos){
            return res.status(404).json({ok:false,
                msg: 'No se encontro ningun video'
            });
        }

        res.json({ok:true, data: videos});
    }catch (e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
};

const videosGetByArtista = async (req=request, res=response)=>{
    const {busqueda} = req.body;

    try{
        const videos = await videoModel.find({artista:{ $regex: busqueda, $options: 'i' }});

        if (!videos){
            return res.status(404).json({ok:false,
                msg: 'No se encontro ningun video con el artista'
            });
        }

        res.json({ok:true, data: videos});
    }catch (e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
};

const videosPost = async (req=request, res=response) =>{
    const newVideo = new videoModel(req.body)

    try{
        const video_existe = await videoModel.findOne({titulo:newVideo.titulo, artista:newVideo.artista});

        if(video_existe){
            return res.status(418).json({ok:false,
                msg: "Ya existe este video"
            });
        }

        await newVideo.save();

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
};

const videosUpdate = async(req=request,res=response)=>{
    const {id} = req.params;

    try{
        const video = await videoModel.findOne({_id:id});

        if (!video){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el video'
            })
        }

        await videoModel.updateOne({_id:id},req.body);

        res.status(201).json({ok:true,
            msg: 'Actualizado con exito'
        })
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
}

const videosDelete = async (req=request,res=response)=>{
    const {id} = req.params;

    try{
        const video = await videoModel.findOne({_id:id});

        if (!video){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el video'
            })
        }

        await videoModel.deleteOne({_id:id});

        res.status(201).json({ok:true,
            msg: 'Eliminado con exito'
        })
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
}

module.exports={
    videosGetAll,
    videosGetByArtista,
    videosGetByTitulo,
    videosGetBy_Id,
    videosPost,
    videosUpdate,
    videosDelete
}