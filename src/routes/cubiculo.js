const router = require('express').Router();

const cubiculoController = require('../controller/cubiculoController');

router.get('/', cubiculoController.listcubiculo);
router.post('/add', cubiculoController.savecubiculo);
router.get('/update/:Numero', cubiculoController.editcubiculo);
router.post('/update/:Numero', cubiculoController.updatecubiculo);
router.get('/delete/:Numero', cubiculoController.deletecubiculo);

module.exports = router;