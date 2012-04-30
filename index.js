var express = require('express');

var app = module.exports = express.createServer();

//setup environment
require('./config/environment.js')(app, express);
//setup routes
require('./config/routes.js')(app);

//potentially move this into environment somehow
var port = process.env.PORT || 1337;

app.listen(port)

console.log('server up and running on port:'+port);

