
module.exports = function(app){

    //controllers
    var Course = require('../app/controllers/Course.js');
    var Page = require('../app/controllers/Page.js');
    var MobilePage = require('../app/controllers/MobilePage.js');
    var Location = require('../app/controllers/Location.js');
    var Hole = require('../app/controllers/Hole.js');
    var Tee = require('../app/controllers/Tee.js');
    var User = require('../app/controllers/User.js');
    var Auth = require('../app/controllers/Auth.js');

    //page routes
    app.get('/', Page.index);

    //mobile routes -- deprecated
    app.get('/app', MobilePage.app);
    app.get('/home', MobilePage.menu);
    app.get('/find', MobilePage.find);
    app.get('/course_detail' MobilePage.course);
    app.get('/course_detail/:id', MobilePage.course);
    app.get('/hole_detail', MobilePage.hole);
    app.get('/hole_detail/:course_id/:hole_id', MobilePage.hole);
    //mobile routes
    app.get('/mobile', MobilePage.app);
    app.get('/mobile/menu', MobilePage.menu);
    app.get('/mobile/find', MobilePage.find);
    app.get('/mobile/search', MobilePage.search);
    app.get('/mobile/course/:id', MobilePage.course);
    app.get('/mobile/hole/', MobilePage.hole);
    app.get('/mobile/hole/:course_id/:hole_id', MobilePage.hole);

    //location routes
    app.get('/location/new', Location.new);
    app.post('/location', Location.create);
    app.get('/location/:id', Location.show);
    app.get('/location', Location.index);
    app.get('/location/:id/edit', Location.edit);
    app.put('/location/:id'. Location.update);
    app.del('/location/:id', Location.delete);
    app.get('/location/near/:lat/:lng', Location.near);
                
    //course routes
    app.get('/course/new', Course.new);
    app.post('/course', Course.create);
    app.get('/course/:id', Course.show);
    app.get('/course', Course.index);
    app.get('/course/:id/edit', Course.edit);
    app.put('/course/:id', Course.update);
    app.del('/course/:id', Course.delete);
    app.get('/location/:id/course', Course.course_by_location_id);
    //deprecated route
    app.get('/course/bylocid/:id', Course.course_by_location_id);

    //hole routes
    app.get('/hole/new', Hole.new);
    app.post('/hole', Hole.create);
    app.get('/hole/:id', Hole.show);
    app.get('/hole', Hole.index);
    app.get('/hole/:id/edit', Hole.edit);
    app.put('/hole/:id',Hole.update);
    app.del('/hole/:id', Hole.delete);
    app.get('/course/:id/hole', Hole.holes_by_course_id);
    //deprecated route
    app.get('/hole/bycourseid/:id', Hole.holes_by_course_id);

    //tee routes
    app.get('/tee/new', Tee.new);
    app.post('/tee', Tee.create);
    app.get('/tee/:id', Tee.show);
    app.get('/tee', Tee.index);
    app.get('/tee/:id/edit', Tee.edit);
    app.put('/tee/:id', Tee.update);
    app.del('/tee/:id', Tee.delete);
    app.get('/hole/:id/tee', Tee.tee_by_hole_id);
    //deprecated route
    app.get('/tee/byholeid/:id', Tee.tee_by_hole_id);

    //user routes
    app.get('/user/new', User.new);
    app.post('/user', User.create);
    app.get('/user/:id', User.show);
    app.get('/user', User.index);
    app.get('/user/:id/edit', User.edit);
    app.put('/uder/:id', User.update);
    app.del('/user/:id', User.delete);
    //deprecated route
    app.get('/user/email/:email', User.show);

    //auth routes
    app.get('/auth/facebook/login', Auth.facebook_login);
    app.get('/auth/facebook/callback', Auth.facebook_callback);
    app.get('/auth/facebook/logout', Auth.facebook_logout);
    app.get('/auth/user/login', Auth.user_login);
    app.get('/auth/user/logout', Auth.user_logout);

}
