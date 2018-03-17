const db = require('../../config/dbConnection.js');
const bodyParser = require('body-parser');

module.exports = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
   
    app.post("/show", (req, res) =>{
        db('select * from usuarios');
        res.sendStatus(400)
    });

    app.post("/add", (req, res) =>{
        let name = req.body.txtName;
        let pass = req.body.txtPassword;
        console.log(name, pass);
        db(`insert into usuarios (username, password) values("${name}", "${pass}")`);
        res.sendStatus(400)
    });
}