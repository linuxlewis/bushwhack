var User = require('../models/User.js');

exports.mapRoutes = function(app){

    app.get('/user/new', function(req, res){

    });

    app.get('/user/:name/:email/:fbid', function(req, res){

        User.create(req.params.name, req.params.email, req.params.fbid, function(err, data){

            if(err){
                res.json(err, 500);
            }
            else{
                res.json(data);
            }

        });


    });

    app.post('/user', function(req, res){

    });

    app.get('/user/:id', function(req, res){
        
        User.findById(req.params.id, function(err, result){
            if(err){
                res.json(err, 500);
            }
            else{

                res.json(result);     
            }
        });

    });

    app.get('/user/email/:email', function(req, res){

        User.findByEmail(req.params.email, function(err, result){
            if(err){
                res.json(err, 500);
            }
            else{

                res.json(result);     
            }
        });


    });
}
