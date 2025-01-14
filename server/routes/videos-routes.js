const { Router } = require('express');
const router = Router();

const{
    videosGetAll,
    videosGetBy_Id,
    videosGetByTitulo,
    videosGetByArtista,
    videosPost,
    videosUpdate,
    videosDelete
}= require('../controllers/videos-controller');

router.get('/',videosGetAll);

router.get('/:id',videosGetBy_Id);

router.post('/buscar/titulo',videosGetByTitulo);

router.post('/buscar/artista',videosGetByArtista);

router.post('/new',videosPost);

router.put('/:id',videosUpdate);

router.delete('/:id',videosDelete);

module.exports=router;