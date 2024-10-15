const {Router} = require('express');
const router = Router();

const{
    listasGetAll,
    listasGetByAlbum_Id,
    listasAddVideo,
    listasDeleteVideo
}= require('../controllers/listas-controller.js');

router.get('/',listasGetAll);

router.get('/:album_id',listasGetByAlbum_Id);

router.post('/',listasAddVideo);

router.delete('/',listasDeleteVideo);

module.exports=router;