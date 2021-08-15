const express = require("express");
const morgan = require('morgan');
const path = require('path');
const myConnection = require('express-myconnection');

//Levantamiento del servidor
const app = express();
const puerto = 8500;


//Ejecucion del servidor
app.listen(puerto, console.log(`Servidor ejecutando en el puerto ${puerto}`));
app.use(express.static('source'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views/layouts'));

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

module.exports = app;