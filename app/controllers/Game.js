exports.mapRoutes = function(app){
    app.get('/game/new', function(req, res){
        res.render('/game/new.html');
    });

    app.post('/game', function(req, res){

    });

    app.get('/game/:id', function(req, res){

    });
}
