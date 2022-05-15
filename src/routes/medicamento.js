const router = require('express').Router();

const medicamentoController = require('../controller/medicamentoController');

router.get('/', medicamentoController.list);
router.post('/add', medicamentoController.save);
router.get('/update/:Serial', medicamentoController.edit);
router.post('/update/:Serial', medicamentoController.update);
router.get('/delete/:Serial', medicamentoController.delete);

module.exports = router;