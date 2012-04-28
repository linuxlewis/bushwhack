var db = require('./model');
var client = db.client;


exports.findById = function(id, callback){
   
   client.query("SELECT * FROM users WHERE id = " + id , function(err, result){
       if(err){
            callback(err, null);
       }
       else{
           callback(null, result);
       }

   });
}

exports.findByEmail = function(email, callback){
   
   check(email.isEmail());

    client.query("SELECT * FROM users WHERE email = '" + email + "'", function(err, result){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, result);
        }
    });
}

exports.create = function(name, email, fbid, callback){

    client.query("SQL", function(err, result){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, result);
        }
    });
}

exports.login = function(email, fbid, callback){


}

