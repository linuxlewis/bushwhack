var db = require('./model');
var client = db.client;

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



exports.create = function(course, properties, go, here, callback){


}
