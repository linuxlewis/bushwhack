var util = require('util');
var Tee = require('../models/Tee.js');


exports.mapRoutes = function(app){

    app.get('/tee/:id', function(req, res){
        Tee.findById(req.params.id, function(err, result){
            if(err){
                res.json(err, 500)
            }
            else{
                res.json(result);
            }
        });
    });

    app.get('/tee/byholeid/:id', function(req, res) {
		Tee.findByHoleId(req.params.id, function(err, result){
			if(err){
				res.json(err, 500)
			}
			else{
				res.json(result);
			}
		});
	});

}
