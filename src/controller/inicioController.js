const controller = {}; 

controller.list = (req, res) => {
    res.render('inicio')
};

controller.toCubiculo = (req, res) => {
    res.render('C:/Users/USER/Desktop/Proyecto/src/views/cubiculo')
};

controller.toMedicamento = (req, res) => {
    res.render('C:/Users/USER/Desktop/Proyecto/src/views/medicamento')
};

module.exports = controller;