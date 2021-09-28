const { query } = require('express');
const { ConcatenationScope } = require('webpack');
const database = require('../config/conexion');


module.exports = app => {
    const connection = database(); 
    app.get('/', (req, res) => {
        connection.query(`SELECT Id_Categorias, imagen_producto, producto, descripcion, costo FROM categorias`, (err, result) => {
            console.log(result);
            res.render('main', {
                catalogo: result
            });
        });
    });

    app.get('/formulario.ejs/:Id_Categorias', (req, res) => {
        const connection = database();
        const Id_Categorias = req.params.Id_Categorias;
        connection.query(`SELECT * FROM categorias WHERE Id_Categorias = '${Id_Categorias}'`, (err, result) =>{
            console.log(result);
            res.render('formulario', {
                selectProduct: result
            });
        });
    });

    app.get('/marvel.ejs', (req, res) => {
        const connection = database();
        connection.query(`SELECT * FROM categorias WHERE marca = 'Marvel'`, (err, result) => {
            // console.log(result);
            res.render('marvel', {
                marvel : result
            });
        });
    });

    app.get('/dc.ejs' , (req, res) => {
        const connection = database();
        connection.query(`SELECT * From categorias WHERE marca = 'Dc'`, (err, result) => {
            // console.log(result);
            res.render('dc', {
                dc: result
            });
        });
    });

    app.get('/anime.ejs', (req, res) => {
        const connection = database()
        connection.query(`SELECT * FROM categorias WHERE marca = 'Anime'`, (err, result) => {
            // console.log(result);
            res.render('anime', {
                anime: result
            });
        });
    });

    app.get('/login.ejs', (req, res) => {
            res.render('login');
    });

    app.get('/registro.ejs', (req, res) => {
        res.render('registro');
    });

    app.post('/registro.ejs', (req, res) => {
        const connection = database();
        const cliente = {
            cedula : req.body.cedula,
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            direccion : req.body.direccion,
            celular : req.body.celular,
            correo_electronico : req.body.correo_electronico
        }
        connection.query(`INSERT INTO clientes SET '${cliente}'`, (err, result) => {
            console.log(result);
        });

    });

}