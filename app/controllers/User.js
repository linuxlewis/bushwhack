var User = require('../models/User.js');

exports.mapRoutes = function(app){

    app.get('/user/new', function(req, res){

    });

    app.post('/user', function(req, res){

    });

    app.get('/user/:id', function(req, res){
        
        User.findById(req.param.id, function(err, result){
            if(err){
                res.json(err, 500);
            }
            else{
                res.json(result);     
            }
        });

    });
}
