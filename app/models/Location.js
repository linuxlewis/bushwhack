var db = require('./model');
var client = db.client;

var check = require('validator').check,
    sanitize = require('validator').sanitize

exports.findById = function(id, callback){
    check(id).notEmpty().isInt();
    
    client.query("SELECT * FROM locations WHERE id = " + id, function(err, result){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, result);
        }
    });
}


exports.findNearest = function(lat, lng, callback){
    lat = sanitize(lat).toFloat();
    lng = sanitize(lng).toFloat();
    
    //100 miles = 160935 meters
    var dist = 160935
    
    var sql="SELECT id, name lat, lng, address, city, state, zip, " + 
        "earth_distance(earthloc, ll_to_earth(" + lat + ", " + lng + ")) as distance " +
        "FROM locations " +
        "WHERE earth_box(ll_to_earth(" + lat + ", " + lng + "), " + dist + ") @> earthloc " +
        "ORDER BY distance LIMIT 10";  
    
    client.query(sql, function(err, result){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, result);
        }
    });
}


exports.findCoursesByLocationId = function(id, callback){
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


/*
Sample Insert:
INSERT INTO locations
    (name, lat, lng, earthloc, address, city, state, zip)
VALUES (
	'Elver Park',
	43.037148, -89.502077,
	ll_to_earth(43.037148, -89.502077),
	'1250 McKenna Blvd',
	'Madison', 'Wisconsin', '53719'
);
*/