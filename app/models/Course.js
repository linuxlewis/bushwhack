var db = require('./model');
var client = db.client;

var check = require('validator').check,
    sanitize = require('validator').sanitize;


exports.findById = function(id, callback){
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
   
   
   
/*
Sample Insert:
INSERT INTO courses
    (location_id, name, lat, lng, earthloc)
VALUES (
	2,
	'Elver Park',
	43.037148, -89.502077,
	ll_to_earth(43.037148, -89.502077)
);
*/
}



exports.create = function(course, properties, go, here, callback){


}
