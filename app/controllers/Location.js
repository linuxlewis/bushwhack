var Location = require('../models/Location.js');
var Course = require('../models/Course.js');

/*
var findByLocationId = (function(req, res){
    Course.findByLocationId(req.params.id, function(err, result){
        if(err){
            res.json(err, 500)
        }
        else{
            res.json(result);
        }
})(req, res);
*/

exports.mapRoutes = function(app){
    app.get('/loc/near/:lat/:lng', function(req, res){

        Location.findNearest(req.params.lat, req.params.lng, function(err, result){
            if(err){
                res.json(err, 500);
            }
            else{
                res.json(result);
            }
        });
    });

    app.get('/loc/:id', function(req, res){
        Location.findById(req.params.id, function(err, result){
            if(err){
                res.json(err, 500)
            }
            else{
                res.json(result);
            }
        });
    });
    
    
    //app.get('/loc/:id/courses', findByLocationId(req, res));
    

}
