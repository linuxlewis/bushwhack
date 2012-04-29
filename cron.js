var util = require('util'),
    exec = require('child_process').exec,
    child;

setInterval(function(){
    child = exec('bash ./deploy.sh', function(err, stdout, stderr){
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });
}, 1000*60*5);
