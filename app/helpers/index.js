module.exports = function(app){
    var helpers = ["user"];
    for(var helper in helpers){
        require('./'+helpers[helper])(app);
    }
}
