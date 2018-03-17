const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, '../../public')));
console.log(path.join(__dirname, '../../public'));
app.set('port', 3000);
app.use(bodyParser.urlencoded({extended: false}));
module.exports = app;