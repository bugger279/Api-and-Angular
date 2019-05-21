// local import
const express = require('express');
const bodyParser = require('body-parser');

// import from file
const {mongoose} = require('./db.js');
var employeeController = require('./controllers/employeeControllers.js')

var app = express();
// Configure middle ware to send son data
app.use(bodyParser.json());
// Start Server
app.listen(3000, () => {console.log('Server Started at Port: 3000')});

app.use('/employees', employeeController);