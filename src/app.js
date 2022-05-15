const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importing routes
//const cubiculoRoutes = require('./routes/cubiculo');
const medicamentoRoutes = require('./routes/medicamento');

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
//app.use('/cubiculo', cubiculoRoutes);
app.use('/', medicamentoRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});