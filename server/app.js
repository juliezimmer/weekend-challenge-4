//server connections
//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//this line may also go in the same file as the get, post, put, delete routes 
var path = require('path');

var port = process.env.PORT || 3000;
var employee = require('./routes/employee');

//identify a port to listen for requests
//var port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

//for server routes
app.use('/employee', employee);

//listern for requests on port 3000
app.listen(port, function () {
    console.log("listening on port:" , port);
});