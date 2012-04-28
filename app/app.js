var express = require('express');

var controllers = ['User', 'Course', 'Game']; 

exports.createServer = function(){

    var app = express.createServer();

    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use('/assets',express.static(__dirname + '/assets'));
    app.register('.html', require('ejs'));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(app.router);

    for (var controller in controllers) {
        var module = require('./controllers/'+controllers[controller]);
        module.mapRoutes(app);
    }

    app.get('/', function(req, res){
        res.render('index.html', {title : 'yay'});
    });

    return app;
}
