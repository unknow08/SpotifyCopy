const {Router} = require('express');
const router = Router();

const {
    albumsGetAll,
    albumsGetBy_Id,
    albumsGetByName,
    albumsPost,
    albumsUpdate,
    albumsDelete
}=require('../controllers/albums-controller.js');

router.get('/',albumsGetAll);

router.get('/:id',albumsGetBy_Id);

router.post('/buscar/nombre',albumsGetByName);

router.post('/new',albumsPost);

router.put('/:id',albumsUpdate);

router.delete('/:id',albumsDelete);

module.exports=router;