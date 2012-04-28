var pg = require('pg');

var connString = 'tcp://msw_ab:5xfFvnp65eyHeg5LwUUv@108.166.85.70/bushwhack';

var client = new pg.Client(connString);

try{
   client.connect();
}
catch(ex){
    console.log('Database Error:' + ex.message);
}


exports.client = client;
