var User = require('../models/User.js');

exports.new = function(req, res){
    res.render('user/new.html');
}

exports.create = function(req, res){
    var params = {};
    User.create(params, function(err, result){
        if(err){
            res.render('user/new.html', {errors:err});
        }
        else{
            res.redirect('/user');
        }
    });
}

exports.show = function(req, res){
    User.findById(req.params.id, function(err, result){
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
    User.findAll(params, function(err, result){
        if(err){
            res.json(err, 500);
        }
        else{
            res.json(result);
        }
    });
}

exports.edit = function(req, res){
    User.findById(req.params.id, function(err, result){
        if(err){
            res.render('user/edit.html', {errors:err});
        }
        else{
            res.render('user/edit.html', {user:result});
        }
    });
}

exports.update = function(req, res){
    var params = {};
    User.update(params, function(err, result){
        if(err){
            res.render('user/edit.html', {errors:err});
        }
        else{
            //flash success
            res.redirect('/user/'+req.params.id);
        }
    });
}

exports.delete = function(req, res){
    User.delete(req.params.id, function(err, result){
        if(err){
            res.render('user/edit.html', {errors:err});
        }
        else
        {
            //flash success
            res.redirect('/user');
        }
    });
}
