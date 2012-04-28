
exports.restrictToUser = function(req, res, next){
    if(!req.session.facebook){

        req.flash('error', 'please log in'); 

        res.redirect('/auth/facebook/login');

    }
    else{
        //user logged in
        next();
    }
}
