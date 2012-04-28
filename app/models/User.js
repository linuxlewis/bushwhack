var db = require('./model');
var client = db.client;

var check = require('validator').check,
    sanitize = require('validator').sanitize


exports.findById = function(id, callback){
    
    check(id).notEmpty().isInt();
   
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
   
   email = email.toLowerCase();
   email = sanitize(email).xss().trim();
   check(email).isEmail().notEmpty();
   

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
    
    check(email).isEmail().notEmpty();
    //email = email.toLowerCase();
    email = sanitize(email).trim();
    email = sanitize(email).xss();
    
    
    name = sanitize(name).trim().xss();
    check(name).notEmpty();
    
    fbid = sanitize(fbid).trim().xss().toInt();
    check(fbid).notEmpty();
    
    var sql = "INSERT INTO users (fbid, name, email) VALUES (" + fbid +
        ", '" + name + "', '" + email + "')";

    client.query(sql, function(err, result){
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

