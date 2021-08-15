const mysql = require('mysql');
const {promisify} = require('util');

module.exports = () => {
    return mysql.createConnection({
        host: "localhost",
            user: "root",
            password: "",
            database: "crimax" 
    });
}

//Conexion con la base de datos
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "crimax"
// });

// db.connect(error => {
//     if (error) {
//         throw error;
//     }
//     console.log("Conexion a la base de datos realizada");
// });

// db.query = promisify(db.query);

// module.exports = db;