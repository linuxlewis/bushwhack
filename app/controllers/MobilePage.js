
exports.app = function(req, res){
    res.render('mobile/index.html', {layout:'mobile_layout.html'});
}

exports.menu = function(req, res){
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
}

exports.find = function(req, res){
    res.render('mobile/find.html', {layout:'mobile_layout.html'});
}

exports.search = function(req, res){
    res.render('mobile/search.html', {layout:'mobile_layout.html'});
}

exports.course = function(req, res){
    if(req.params.id){
        res.render('mobile/course_detail.html', {layout:'mobile_layout.html', location_id:req.params.id});
    }
    else{
        res.render('mobile/course_detail.html', {layout:'mobile_layout.html'});
    }
}

exports.hole = function(req, res){
    if( (req.params.course_id) && (req.params.hole_id) ){
        res.render('mobile/hole_detail.html', {layout:'mobile_layout.html', course_id:req.params.course_id, hole_id:req.params.hole_id});
    }
    else{
        res.render('mobile/hole_detail.html', {layout:'mobile_layout.html'});
    }
}
