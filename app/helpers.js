
exports.restrictToUser = function(req, res, next){
    if(!req.sesssion.facebook.access_token){

        req.flash('error', 'please log in'); 

        res.redirect('/auth/facebook/login');

    }
    else{
        //user logged in
        next();
    }
}
