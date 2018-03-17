const mysql = require('mysql');

module.exports = (query) => {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'loginnode'
    });

    connection.connect(function(error){
        if(error){
           throw error;
        }else{
           console.log('Conexion correcta.');
        }
     });

     connection.query(query, (err, resul) => {
        err ? console.log(err) : console.log(resul);
    });

}