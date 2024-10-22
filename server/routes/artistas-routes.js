const {Router} = require('express');
const router = Router();

const{
    artistasGetAll,
    artistasGetBy_Id,
    artistasGetByName,
    artistasPost,
    artistasUpdate,
    artistasDelete
} = require('../controllers/artistas-controller.js');

router.get('/', artistasGetAll);

router.get('/:id', artistasGetBy_Id);

router.post('/bucar/nombre', artistasGetByName);

router.post('/new', artistasPost);

router.put('/:id', artistasUpdate);

router.delete('/:id', artistasDelete);

module.exports= router;