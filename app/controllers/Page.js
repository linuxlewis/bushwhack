
exports.mapRoutes = function(app){

    app.get('/', function(req, res){
        res.render('index.html', {title : 'yay'});
    });

    app.get('/survey', function(req, res){
        res.render('survey.html');
    });

    //app start
    app.get('/app', function(req, res){
        res.render('app.html', {layout:false});

    });

    app.get('/find', function(req, res){
        res.render('find.html', {layout:'mobile_layout.html'});
    });

}
