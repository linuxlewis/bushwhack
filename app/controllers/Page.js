
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

    app.get('/course_detail/:locid', function(req, res){
        res.render('mobile/course_detail.html', {layout:'mobile_layout.html', location_id:req.params.locid});
    });

    app.get('/hole_detail', function(req, res){
        res.render('mobile/hole_detail.html', {layout:'mobile_layout.html'});
    });

    app.get('/hole_detail/:course_id/:hole_id', function(req, res){
        res.render('mobile/hole_detail.html', {layout:'mobile_layout.html', course_id:req.params.course_id, hole_id:req.params.hole_id});
    });

    app.get('/hole_next', function(req, res){
        res.render('mobile/hole_next.html', {layout:'mobile_layout.html'});
    });

    app.get('/next_hole', function(req, res){
        res.render('mobile/next_hole.html', {layout:'mobile_layout.html'});
    });
}
