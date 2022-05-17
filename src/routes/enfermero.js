const router = require('express').Router();

const enfermeroController = require('../controllers/enfermeroController');

router.get('/', enfermeroController.list);
router.post('/add', enfermeroController.save);
router.get('/delete/:idEnfermero', enfermeroController.delete);
router.get('/update/:idEnfermero', enfermeroController.edit);
router.post('/update/:idEnfermero', enfermeroController.update);

module.exports = router;