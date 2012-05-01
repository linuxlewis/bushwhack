var db = require('./model');
var client = db.client;

var check = require('validator').check,
    sanitize = require('validator').sanitize;


exports.create = function(params, callback){
    callback();
}

exports.update = function(params, callback){
    callback();
}

exports.delete = function(params, callback){
    callback();
}

exports.findById = function(id, callback){
   check(id).notEmpty().isInt();
   
   client.query("SELECT * FROM tees WHERE id = " + id , function(err, result){
       if(err){
            callback(err, null);
       }
       else{
           callback(null, result);
       }
	});
}

exports.findAll = function(params, callback){
    callback();
}

exports.findByHoleId = function(id, callback){
   check(id).notEmpty().isInt();
   
   client.query("SELECT * FROM tees WHERE hole_id = " + id , function(err, result){
       if(err){
            callback(err, null);
       }
       else{
           callback(null, result);
       }
	});
}

exports.find_by_hole_id = exports.findByHoleId;
