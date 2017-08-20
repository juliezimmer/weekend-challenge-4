//server connections
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var employee = require('./routes/employee');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser,urlencoded({extended: true}));

//for server routes
app.use('/employee', employee);

//listern for requests on port 3000
app.listen(port, function () {
    console.log("listening on port:" , port);
});