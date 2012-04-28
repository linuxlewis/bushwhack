var db = require('./model');
var client = db.client;

exports.findById = function(id, callback){
   
   client.query("SQL" , function(err, result){
       if(err){
            callback(err, null);
       }
       else{
           callback(null, result);
       }

   });
}

exports.findByLatLon = function(lat, lon, callback){


}

exports.create = function(course, properties, go, here, callback){


}
