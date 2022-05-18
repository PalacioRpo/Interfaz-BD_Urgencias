const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importing routes
const cubiculoRoutes = require('./routes/cubiculo');
const medicamentoRoutes = require('./routes/medicamento');
const PantallaPrincipal = require('./routes/inicio');
//const registroRoutes = require('./routes/registro');
//const pacienteRoutes = require('./routes/medico');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '-2242003179248650-',
    port: 3306,
    database: 'mydb'
    }, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', PantallaPrincipal);
    //ambulancia
    /*app.get('/ambulancia', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/ambulancia/add', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/ambulancia/delete/:idAmbulancia', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/ambulancia/update/:idAmbulancia', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/ambulancia/edit/:idAmbulancia', function(req, res) {
        res.render(PantallaPrincipal);
    });

    //cubiculo
    app.get('/cubiculo', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/cubiculo/add', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/cubiculo/delete/:Numero', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/cubiculo/update/:Numero', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/cubiculo/edit/:Numero', function(req, res) {
        res.render(PantallaPrincipal);
    });

    //medicamento
    app.get('/medicamento', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/medicamento/add', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/medicamento/delete/:Serial', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/medicamento/update/:Serial', function(req, res) {
        res.render(PantallaPrincipal);
    });
    app.get('/medicamento/edit/:Serial', function(req, res) {
        res.render(PantallaPrincipal);
    });*/

//app.location = "/cubiculo";

// static files
app.use(express.static(path.join(__dirname, '/')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});