var util = require('util');
var Tee = require('../models/Tee.js');

exports.new = function(req, res){
    res.render('tee/new.html');
}

exports.create = function(req, res){
    var params = {};
    Tee.create(params, function(err, result){
        if(err){
            res.render('tee/new.html', {errors:err});
        }
        else{
            //flash success
            res.redirect('/tee');
        }
    });
}

exports.show = function(req, res){
    Tee.findById(req.params.id, function(err, result){
            if(err){
                res.json(err, 500)
            }
            else{
                res.json(result);
            }
        });
}

exports.index = function(req, res){
    var params {};
    Tee.findAll(params, function(err, result){
        if(err){
            res.json(err, 500);
        }
        else{
            res.json(result);
        }
    });
}

exports.edit = function(req, res){
    Tee.findById(req.params.id, function(err, result){
        if(err){
            res.render('tee/edit.html', {errors:err});
        }
        else{
            res.render('tee/edit.html', {tee:result});
        }
    });
}

exports.update = function(req, res){
    var params = {}
    Tee.update(params, function(err, result){
        if(err){
            res.render('tee/edit.html', {erros:err});
        }
        else{
            //flash success
            res.redirect('/tee/'+result.id);
        }
    });
}

exports.delete = function(req, res){
    Tee.delete(req.params.id, function(err, result){
        if(err){
            res.render('tee/edit.html', {errors:err});
        }
        else{
            //flash success
            res.redirect('/tee');
        }
    }
}

exports.tee_by_hole_id = function(req, res){
    Tee.find_by_hole_id(req.params.id, function(err, result){
        if(err){
            res.json(err, 500)
        }
        else{
            res.json(result);
        }
    });
}
