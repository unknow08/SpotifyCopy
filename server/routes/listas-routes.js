const {Router} = require('express');
const router = Router();

const{
    listasGetByAlbum,
    listasAddVideo,
    listasDeleteVideo
}= require('../controllers/listas-controller.js');

router.get('/:album_id',listasGetByAlbum);

router.post('/',listasAddVideo);

router.delete('/',listasDeleteVideo);

module.exports=router;