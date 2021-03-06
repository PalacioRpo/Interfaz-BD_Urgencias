const router = require('express').Router();

const medicamentoController = require('../controller/medicamentoController');

router.get('/medicamento', medicamentoController.list);
router.post('/medicamento/add', medicamentoController.save);
router.get('/medicamento/edit/:Serial', medicamentoController.edit);
router.post('/medicamento/update/:Serial', medicamentoController.update);
router.get('/medicamento/delete/:Serial', medicamentoController.delete);

module.exports = router;