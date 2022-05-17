const router = require('express').Router();

const medicoController = require('../controller/medicoController');

router.get('/', medicoController.list);
router.post('/add', medicoController.save);
router.get('/delete/:idMedico', medicoController.delete);
router.get('/update/:idMedico', medicoController.edit);
router.post('/update/:idMedico', medicoController.update);

module.exports = router;
