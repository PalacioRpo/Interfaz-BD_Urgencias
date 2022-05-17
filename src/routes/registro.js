const router = require('express').Router();

const registroController = require('../controller/registroController');

router.get('/', registroController.list);
router.get('/viewcubiculo', registroController.listcubiculos);
router.post('/add', registroController.save);
router.get('/update/:idRegistro', registroController.edit);
router.post('/update/:idRegistro', registroController.update);
router.get('/delete/:idRegistro', registroController.delete);

module.exports = router;