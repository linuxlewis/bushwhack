var db = require('./model');
var client = db.client;

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
    
    check(lat).isNumeric()
    check(lng).isNumeric()
    
    //100 miles = 160935 meters
    var dist = 160935
    
    var sql="SELECT id, name lat, lng, address, city, state, zip, " + 
        "earth_distance(earthloc, ll_to_earth(" + lat + ", " + lng + ")) as distance" +
        "FROM locations" +
        "WHERE earth_box(ll_to_earth(" + lat + ", " + lng + "), " + dist + ") @> earthloc" +
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
