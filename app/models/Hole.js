var db = require('./model');
var client = db.client;

var check = require('validator').check,
    sanitize = require('validator').sanitize;


exports.findById = function(id, callback){
   check(id).notEmpty().isInt();
   
   client.query("SELECT * FROM holes WHERE id = " + id , function(err, result){
       if(err){
            callback(err, null);
       }
       else{
           callback(null, result);
       }
   });
}


exports.findByCourseId = function(id, callback){
   check(id).notEmpty().isInt();
   
   client.query("SELECT * FROM holes WHERE course_id = " + id + " ORDER BY hole_number", function(err, result){
       if(err){
            callback(err, null);
       }
       else{
           callback(null, result);
       }
	});
}
