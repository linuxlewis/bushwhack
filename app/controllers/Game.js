exports.mapRoutes = function(app){
    app.get('/game/new', function(){
        res.render('/game/new.html');
    });

    app.post('/game', function(){

    });

    app.get('/game/:id', function(){

    });
}
