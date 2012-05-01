module.exports = function(app){
    app.dynamicHelpers({
         logged_in: function(req, res){
            if(!req.session.facebook){
                return false;
            }
            else{
                return true;
            }
        }
        
    });
}
