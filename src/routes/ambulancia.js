const router = require('express').Router();

const ambulanciaController = require('../controllers/ambulanciaController');

router.get('/', ambulanciaController.list);
router.post('/add', ambulanciaController.save);
router.get('/delete/:idAmbulancia', ambulanciaController.delete);
router.get('/update/:idAmbulancia', ambulanciaController.edit);
router.post('/update/:idAmbulancia', ambulanciaController.update);

module.exports = router;