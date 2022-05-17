const express = require('express')
const router = express.Router();

const cubiculoController = require('../controller/cubiculoController');
//router.post('/add', function(req, res) {
//    cubiculoController.save;
//});
//router.location = "/add";

router.get('/', cubiculoController.list);
router.post('/add', cubiculoController.save);
router.get('/update/:Numero', cubiculoController.edit);
router.post('/update/:Numero', cubiculoController.update);
router.get('/delete/:Numero', cubiculoController.delete);

module.exports = router;