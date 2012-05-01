var Course = require('../models/Course.js');

exports.new = function(req, res){
    res.render('course/new.html');
});

exports.create = function(req, res){
    var params = {}
    Course.create(params, function(err, result){
        if(err){
            res.render('course/new.html', {errors:err});
        }
        else{
            res.redirect('/course'):
        }
    });
}

exports.show = function(req, res){
    Course.findById(req.params.id, function(err, result){
        if(err){
            res.json(err, 500)
        }
        else{
            res.json(result);
        }
    });
}

exports.index = function(req, res){
    var params = {}
    Course.findAll(params, function(err, result){
        if(err){
            res.json(err, 500);
        }
        else{
            res.json(result);
        }
    });
}

exports.edit = function(req, res){
    Location.findById(req.params.id, function(err, result){
        if(err){
            res.render('course/edit.html', {errors:err});
        }
        else{
            res.render('course/edit.html', {course:result});
        }
    });
}

exports.update = function(req, res){
    var params = {};
    Location.update(params, function(err, result){
        if(err){
            res.render('course/edit.html', {errors:err});
        }
        else{
            res.redirect('/course'+result.id); 
        }
    });
}

exports.delete = function(req, res){
    Course.delete(req.params.id, function(err, result){
        if(err){
            res.render('course/edit.html', {errors:err});
        }
        else{
            res.redirect('/course');
        }
    }
}

exports.course_by_location_id = function(req, res){
    Course.find_by_location_id(req.params.id, function(err, result){
        if(err){
            res.json(err, 500);
        }
        else{
            res.json(result);
        }
    });
}
