var request = require('request');
var Game = require('../models/Game.js');
var helper = require('../helpers');

exports.mapRoutes = function(app){
    app.get('/game/new', helper.restrictToUser, function(req, res){
        request("https://graph.facebook.com/me?access_token="+req.session.facebook.access_token,
                function(err, response, body){
                    if(!err){
                        var data = JSON.parse(body);
                        res.render('game/new.html', {name:data.first_name});
                    }
                });
    });

    app.post('/game', helper.restrictToUser, function(req, res){

    });

    app.get('/game/:id', helper.restrictToUser function(req, res){

    });
}
