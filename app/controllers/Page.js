
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
        res.render('mobile/home.html', {layout:'mobile_layout.html'});
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
