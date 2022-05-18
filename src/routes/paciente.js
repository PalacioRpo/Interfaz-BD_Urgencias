const router = require('express').Router();

const pacienteController = require('../controller/pacienteController');

router.get('/', pacienteController.list);
router.post('/add', pacienteController.save);
router.get('/delete/:idPaciente', pacienteController.delete);
router.get('/update/:idPaciente', pacienteController.edit);
router.post('/update/:idPaciente', pacienteController.update);

module.exports = router;
