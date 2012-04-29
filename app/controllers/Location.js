var Location = require('../models/Location.js');
exports.mapRoutes = function(app){

    app.get('/location/near/:lat/:lon', function(req, res){

        Location.findNearest(req.params.lat, req.params.lon, function(err, result){
            if(err){
                res.json(err, 500);

            }
            else{
                res.json(result);
            }

        });

    });

    app.get('/location/:id', function(req, res){
        Location.findById(req.param.id, function(err, result){
            if(err){
                res.json(err, 500)
            }
            else{
                res.json(result);
            }
        });

    });

}
