'use strict'
//importacion del server y conexion a la base de datos
const app = require('./source/config/server');
const mysql = require('./source/config/conexion');

const links = require('./source/routes/links') (app);

