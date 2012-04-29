var Location = require('../models/Location.js');
var Course = require('../models/Course.js');


exports.mapRoutes = function(app){
    app.get('/location/near/:lat/:lng', function(req, res){

        Location.findNearest(req.params.lat, req.params.lng, function(err, result){
            if(err){
                res.json(err, 500);
            }
            else{
                res.json(result);
            }
        });
    });

    app.get('/location/:id', function(req, res){
        Location.findById(req.params.id, function(err, result){
            if(err){
                res.json(err, 500)
            }
            else{
                res.json(result);
            }
        });
    });
    
    
    app.get('/location/:id/courses', function(req, res){
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
