var util = require('util');
var Hole = require('../models/Hole.js');

exports.mapRoutes = function(app){

    app.get('/hole/:id', function(req, res){
        Hole.findById(req.params.id, function(err, result){
            if(err){
                res.json(err, 500);
            }
            else{
                res.json(result);
            }
        });
	});


    app.get('/hole/bycourseid/:id', function(req, res){
        Hole.findByCourseId(req.params.id, function(err, result){
            if(err){
                res.json(err, 500);
            }
            else{
                res.json(result);
            }
        });
	});
}
