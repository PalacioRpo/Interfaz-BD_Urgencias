const router = require('express').Router();
const inicioController = require('../controller/inicioController');
const medicamentoController = require('../controller/medicamentoController');

router.get('/', inicioController.list);
router.get('/cubiculo', inicioController.toCubiculo);

//medicamento
router.get('/medicamento', medicamentoController.list);
router.post('/medicamento/add', medicamentoController.save);
router.post('/medicamento/update/:Serial', medicamentoController.update);
router.get('/medicamento/edit/:Serial', medicamentoController.edit);
router.get('/medicamento/delete/:Serial', medicamentoController.delete);

module.exports = router;