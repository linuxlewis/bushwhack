var Course = require('../models/Course.js');
var util = require('util');

exports.mapRoutes = function(app){

    //new course resource form
    app.get('/course/new', function(req, res){

    });

    //create course resource
    app.post('/course', function(req, res){

    });

    app.get('/course/:id', function(req, res){
        Course.findById(req.params.id, function(err, result){
            if(err){
                res.json(err, 500)
            }
            else{
                res.json(result);
            }
        });
    });

    app.get('/course/bylocid/:id', function(req, res) {
		Course.findByLocationId(req.params.id, function(err, result){
			if(err){
				res.json(err, 500)
			}
			else{
				res.json(result);
			}
		});
	});
}
