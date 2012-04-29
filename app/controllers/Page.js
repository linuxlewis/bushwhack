
var request = require('request');

exports.mapRoutes = function(app){

    app.get('/', function(req, res){
        res.render('index.html', {title : 'yay'});
    });

    app.get('/survey', function(req, res){
        res.render('survey.html');
    });

    //app start
    app.get('/app', function(req, res){
        res.render('mobile/index.html', {layout:'mobile_layout.html'});
    });

    app.get('/home', function(req, res){
        if(req.session.facebook){
            request("https://graph.facebook.com/me?access_token="+req.session.facebook.access_token,
                    function(err, response, body){
                        if(!err){
                            var data = JSON.parse(body);
                            res.render('mobile/home.html', {layout:'mobile_layout.html', name:data.first_name});
                        }
                    });
        }
        else{
            res.render('mobile/home.html', {layout:'mobile_layout.html'});
        }
    });

    app.get('/find', function(req, res){
        res.render('mobile/find.html', {layout:'mobile_layout.html'});
    });

    app.get('/course_detail', function(req, res){
        res.render('mobile/course_detail.html', {layout:'mobile_layout.html'});
    });

    app.get('/hole_detail', function(req, res){
        res.render('mobile/hole_detail.html', {layout:'mobile_layout.html'});
    });
}
