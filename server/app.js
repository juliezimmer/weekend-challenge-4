//server connections
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 5000;
var employee = require('./routes/employee');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//for server routes
app.use('/employee', employee);

//listern for requests on port 5000
app.listen(port, function () {
    console.log("listening on port:" , port);
});