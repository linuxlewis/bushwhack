var Location = require('../models/Location.js');

exports.new = function(req, res){
    res.render('location/new.html');
}

exports.create = function(req, res){
    var params = {};
    Location.create(params, function(err, result){
        if(err){
            res.render('location/new.html', {errors: err});
        }
        else{
            //req.flash succcess !!
            res.redirect('/location');
        }
    });
}

exports.show = function(req, res){
    Location.findById(req.params.id, function(err, result){
        if(err){
            res.json(err, 500);
        }
        else{
            res.json(result);
        }
    });
}

exports.index = function(req, res){
    var params = {};
    Location.findAll(params, function(err, result){
        if(err){
            res.json(err, 500):
        }
        else{
            res.json(result);
        }
    });
}

exports.edit = function(req, res){
    Location.findById(req.params.id, function(err, result){
        if(err){
            res.render('location/edit.html', {errors:err});
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
            res.render('location/edit.html', {errors:err});
        }
        else{
            //flash success
            res.redirect('/location/'+result.id);
        }
    });
}

exports.delete = function(req, res){
    Location.deleteById(req.params.id, function(err, result){
        if(err){
            res.render('location/edit.html', {erros:err});
        }
        else{
            //flash success
            res.redirect('/location');
        }
    });
}

exports.near = function(req, res){
    Location.findNearest(req.params.lat, req.params.lng, function(err, result){
        if(err){
            res.json(err, 500);
        }
        else{
            res.json(result);
        }
    });
}
