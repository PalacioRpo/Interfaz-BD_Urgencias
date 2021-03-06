const router = require('express').Router();
const inicioController = require('../controller/inicioController');
const medicamentoController = require('../controller/medicamentoController');
const ambulanciaController = require('../controller/ambulanciaController');
const cubiculoController = require('../controller/cubiculoController');
const enfermeroController = require('../controller/enfermeroController');
const medicoController = require('../controller/medicoController');
const pacienteController = require('../controller/pacienteController');
const registroController = require('../controller/registroController');
const atencionController = require('../controller/atencionController');

router.get('/', inicioController.list);

//ambulancia
router.get('/ambulancia', ambulanciaController.list);
router.post('/ambulancia/add', ambulanciaController.save);
router.get('/ambulancia/delete/:idAmbulancia', ambulanciaController.delete);
router.get('/ambulancia/edit/:idAmbulancia', ambulanciaController.edit);
router.post('/ambulancia/update/:idAmbulancia', ambulanciaController.update);

//cubiculo
router.get('/cubiculo', cubiculoController.list);
router.post('/cubiculo/add', cubiculoController.save);
router.get('/cubiculo/delete/:Numero', cubiculoController.delete);
router.get('/cubiculo/edit/:Numero', cubiculoController.edit);
router.post('/cubiculo/update/:Numero', cubiculoController.update);

//enfermero
router.get('/enfermero', enfermeroController.list);
router.post('/enfermero/add', enfermeroController.save);
router.get('/enfermero/delete/:idEnfermero', enfermeroController.delete);
router.get('/enfermero/edit/:idEnfermero', enfermeroController.edit);
router.post('/enfermero/update/:idEnfermero', enfermeroController.update);

//medico
router.get('/medico', medicoController.list);
router.post('/medico/add', medicoController.save);
router.get('/medico/delete/:idMedico', medicoController.delete);
router.get('/medico/edit/:idMedico', medicoController.edit);
router.post('/medico/update/:idMedico', medicoController.update);

//paciente
router.get('/paciente', pacienteController.list);
router.post('/paciente/add', pacienteController.save);
router.get('/paciente/edit/:idPaciente', pacienteController.edit);
router.post('/paciente/update/:idPaciente', pacienteController.update);

//medicamento
router.get('/medicamento', medicamentoController.list);
router.post('/medicamento/add', medicamentoController.save);
router.get('/medicamento/edit/:Serial', medicamentoController.edit);
router.post('/medicamento/update/:Serial', medicamentoController.update);
router.get('/medicamento/delete/:Serial', medicamentoController.delete);

//registro ingreso
router.get('/registro', registroController.list);
router.post('/registro/add', registroController.save);
router.get('/tablapaciente', registroController.listpaciente);
router.get('/tablacubiculo', registroController.listcubiculos);
router.get('/registro/edit/:idRegistro', registroController.edit);
router.post('/registro/update/:idRegistro', registroController.update);
router.get('/registropaciente', registroController.consultpaciente);

//atencion
router.get('/atencion', atencionController.list);
router.post('/atencion/add', atencionController.save);
router.get('/tablamedico', atencionController.listmedicos);
router.get('/tablaenfermero', atencionController.listenfermeros);
router.get('/tablamedicamento', atencionController.listmedicamentos);
router.get('/atencion/update/:idAtencionPaciente', atencionController.edit);
router.post('/atencion/update/:idAtencionPaciente', atencionController.update);
//router.get('/editcubiculo/:Numero', atencionController.editc);
router.post('/updatecubiculo/:Numero', atencionController.updatec);
router.get('/atencion/delete/:idAtencionPaciente', atencionController.delete);

module.exports = router;