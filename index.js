var app = require('./app/app.js');

var server = app.createServer();

var port = process.env.PORT || 1337;

server.listen(port)
console.log('app up and running on port:'+port);

