var Hole = require('../models/Hole.js');

exports.new = function(req, res){
    res.render('hole/new.html');
}

exports.create = function(req, res){
    var params = {};
    Hole.create(params, function(err, result){
        if(err){
            res.render('hole/new.html', errors:err);
        }
    });
}

exports.show = function(req, res){
    Hole.findById(req.params.id, function(err, result){
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
    Hole.findAll(params, function(err, result){
        if(err){
            res.json(err, 500);
        }
        else{
            res.json(result);
        }
    });
}

exports.edit = function(req, res){
    Hole.findById(req.params.id, function(err, result){
        if(err){
            res.render('hole/edit.html', {errors:err});
        }
        else{
            res.render('hole/edit.html', {hole:result});
        }
    });
}
exports.update = function(req, res){
    var params = {};
    Hole.update(params, function(err, result){
        if(err){
            res.render('hole/edit.html', {errors:err});
        }
        else{
            res.redirect('/hole/'+result.id);
        }
    });
}
exports.delete = function(req, res){
    Hole.delete(req.params.id, function(err, result){
        if(err){
            res.render('hole/edit.html', {errors:err});
        }
        else{
            //flash success
            res.redirect('/hole');
        }
    });
}
exports.holes_by_course_id = function(req, res){
    Hole.findByCourseId(req,params.id, function(err, result){
        if(err){
            res.json(err, 500);
        }
        else{
            res.json(result);
        }
    });
}
