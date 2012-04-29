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
}



exports.create = function(course, properties, go, here, callback){


}
