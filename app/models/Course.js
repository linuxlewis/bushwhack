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
   
   client.query("SELECT * FROM courses WHERE id = " + id , function(err, result){
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
exports.findByLocationId = function(id, callback){
   check(id).notEmpty().isInt();
   
   client.query("SELECT * FROM courses WHERE location_id = " + id , function(err, result){
       if(err){
            callback(err, null);
       }
       else{
           callback(null, result);
       }
   });
}

exports.find_by_location_id = exports.findByLocationId;
//i like ruby style methods like this for long method names.
   
   
   
/*
INSERT INTO courses
(location_id, name, lat, lng, earthloc, established, tee_type, description, target_type, course_distance, num_holes)
VALUES (
2,
'Course Name',
43.037148, -89.502077,
ll_to_earth(43.037148, -89.502077),
'1901',
'tee type',
'description',
'target type',
'5,000 ft',
18
);
*/



exports.create = function(course, properties, go, here, callback){


}
