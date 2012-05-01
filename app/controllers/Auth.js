var facebook_settings = {
    request_token_url: 'https://www.facebook.com/dialog/oauth',
    access_token_url: 'https://graph.facebook.com/oauth/access_token',
    authenticate_url: 'https://api.twitter.com/oauth/authenticate',
    authorize_url: 'https://api.twitter.com/oauth/authorize',
    consumer_key: '206262302824458',
    consumer_secret: '2851a3c9ed8eca8917a18554fbb8ec5b',
    permissions: 'user_about_me,user_birthday,user_checkins,user_events,user_location,user_photos,user_status,user_videos,email'
}
var OAuth = require('oauth').OAuth2;
var User = require('../models/User.js');

//facebook permissions
//user_about_me,user_birthday,user_checkins,user_events,user_location,user_photos,user_status,user_videos,email

function login_url(callback_url){
    return facebook_settings.request_token_url + '?scope='+facebook_settings.permissions+'&client_id='+facebook_settings.consumer_key+'&redirect_uri='+callback_url;
}

function oauth_callback(code, callback_url, callback){

    var oa = new OAuth(facebook_settings.consumer_key,  facebook_settings.consumer_secret,  "https://graph.facebook.com");
    oa.getOAuthAccessToken(code, { redirect_uri:callback_url }, function( error, access_token, refresh_token ){
        if(error){
            callback(error, null, null);
        }
        else if(access_token && refresh_token){
            callback(null, access_token, refresh_token);
        }
        else{
            callback(null, access_token);
        }
    });


}

exports.facebook_login = function(req, res){
    res.redirect(login_url('http://bushwhack.co/auth/facebook/callback'));
}


exports.facebook_callback = function(req, res){
    oauth_callback(req.query.code, 'http://bushwhack.co/auth/facebook/callback', function(err, access_token, refresh_token){
        if(err){
            res.render('error', err);
        }
        else{
            req.session.facebook = {};  
            req.session.facebook.access_token = access_token

            if(refresh_token){
                req.session.facebook.refresh_token = refresh_token
            }

            var redirect = req.query._next || '/mobile/menu';
            res.redirect(redirect);
        }

    });
}

exports.facebook_logout = function(req, res){
        req.session.destroy();
        var redirect = req.query._next || '/mobile/menu';
        res.redirect(redirect);
}

exports.user_login = function(req, res){
    //FIXME
    User.findById(req.body.email, function(err, result){

    });
}

exports.user_logout = function(req, res){
    //FIXME
}
