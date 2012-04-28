var request = require('request');

exports.mapRoutes = function(app){
    app.get('/game/new', function(req, res){
        if(req.session.facebook.access_token){
            request("https://graph.facebook.com/me?access_token="+req.session.facebook.access_token,
                function(err, response, body){
                    if(!err){
                        var data = JSON.parse(body);
                        res.render('game/new.html', {name:data.first_name});
                    }
                });
        }
        else{

        }
    });

    app.post('/game', function(req, res){

    });

    app.get('/game/:id', function(req, res){

    });
}
