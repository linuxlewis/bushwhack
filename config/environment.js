module.exports = function(app, express){
    //general config
    app.configure(function(){
        app.use(express.logger());
        app.use(express.cookieParser());
        app.use(express.session({secret:'SUP BITCH!!2222'}));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.set("jsonp callback", true);
        app.use('/assets',express.static(__dirname + '/../app/assets'));
        app.register('.html', require('ejs'));
        app.set('views', __dirname + '/../app/views');
        app.set('view engine', 'ejs');
        app.use(app.router);
    });

    //dev only config
    app.configure('development', function() {
        app.use(express.errorHandler({
            dumpExceptions:true,
            showStack: true
        }));
    });

    //production only config
    app.configure('production', function(){
        app.use(express.errorHandler());
    });

    //testing only config
    app.configure('testing', function(){

    });
}
