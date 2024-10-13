const {request,response} = require('express');
const videoModel = require('../models/videos-model.js');
const albumModel = require('../models/albums-model.js');
const listaModel = require('../models/listas-model.js');

const listasGetByAlbum = async(req=request,res=response)=>{
    const {album_id} = req.params // Se espera que el id en la ruta sea de un album

    try{
        const album = await albumModel.findOne({_id:album_id});

        if(!album){
            return res.status(404).json({ok:false,
                msg: "No existe el album para buscar su lista"
            })
        }

        const lista = await listaModel.findOne({album_id:album._id});

        if(!album){
            return res.status(404).json({ok:false,
                msg:"Se encontro un album pero no se encontro una lista relacionada con el album. Por favor contacte con el admin"
            })
        }

        res.json({ok:true,
            data:lista
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
}

const listasAddVideo = async (req=request,res=response)=>{
    const {album_id,video_id} = req.body
    try{
        const album = await albumModel.findOne({_id:album_id});
        const video = await videoModel.findOne({_id:video_id});

        if(!album){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el album'
            })
        }

        if (!video){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el video'
            })
        }

        const lista = await listaModel.findOne({album_id:album._id});

        if(!lista){
            return res.status(404).json({ok:false,
                msg: "Se econtro un album pero no hay lista relacionada a este, por favor contacte al administrador"
            });
        }

        let lista_canciones = lista.videos_id;

        const existe_video = lista_canciones.indexOf(video_id);

        //console.log(existe_video);

        if(existe_video != -1){
            return res.status(418).json({ok:false,
                msg:"El video ya se encuentra en la lista"
            });
        }

        lista_canciones.push(video_id);

        await listaModel.updateOne({album_id:album._id},{videos_id:lista_canciones});

        res.status(201).json({ok:true,
            msg:"Video añadido con exito"
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ok:false,
            msg: 'Error, contacte administrador',
            err: e
        });
    }
}

const listasDeleteVideo = async (req=request,res=response)=>{
    const {album_id,video_id} = req.body
    try{
        const album = await albumModel.findOne({_id:album_id});
        const video = await videoModel.findOne({_id:video_id});

        if(!album){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el album'
            })
        }

        if (!video){
            return res.status(404).json({ok:false,
                msg: 'No se encontro el video'
            })
        }

        const lista = await listaModel.findOne({album_id:album._id});

        if(!lista){
            return res.status(404).json({ok:false,
                msg: "Se econtro un album pero no hay lista relacionada a este, por favor contacte al administrador"
            });
        }

        let lista_canciones = lista.videos_id;

        let video_elimar = lista_canciones.indexOf(video._id);

        if(video_elimar == -1){
            return res.status(404).json({ok:false,
                msg:"El video no se encuentra en la lista"
            });
        }

        lista_canciones.splice(video_elimar,1);

        await listaModel.updateOne({album_id:album._id},{videos_id:lista_canciones});

        res.status(201).json({ok:true,
            msg:"Video eliminado con exito"
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
    listasGetByAlbum,
    listasAddVideo,
    listasDeleteVideo
}