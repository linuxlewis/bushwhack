var Location = require('../models/Location.js');

exports.new = function(req, res){
    res.render('location/new.html');
}

exports.create = function(req, res){
    var params = {};
    Location.create(params, function(err, result){
        if(err){
            res.json({errors: err}, 403);
        }
        else{
            res.json({location:result});
        }
    });
}

exports.show = function(req, res){
    Location.findById(req.params.id, function(err, result){
        if(err){
            res.json(err, 403);
        }
        else{
            res.json({location:result});
        }
    });
}

exports.index = function(req, res){
    var params = {};
    Location.findAll(params, function(err, result){
        if(err){
            res.json(err, 403);
        }
        else{
            res.json({location:result});
        }
    });
}

exports.edit = function(req, res){
    console.log('edit');
    Location.findById(req.params.id, function(err, result){
        if(err){
            res.render('location/edit.html', {error:err});
        }
        else{
            res.render('location/edit.html', {location:result});
        }
    });
}

exports.update = function(req, res){
    var params = {};
    Location.update(params, function(err, result){
        if(err){
            res.json({error:err}, 403);
        }
        else{
            res.json({location:result});
        }
    });
}

exports.delete = function(req, res){
    Location.delete(req.params.id, function(err, result){
        if(err){
            res.json({error:err}, 403);
        }
        else{
            res.json({location:result});
        }
    });
}

exports.near = function(req, res){
    Location.findNearest(req.params.lat, req.params.lng, function(err, result){
        if(err){
            res.json({error:err}, 403);
        }
        else{
            res.json({location:result});
        }
    });
}
