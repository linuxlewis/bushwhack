var Location = require('../../app/controllers/Location.js');
var should = require('should');
var testosterone = require('testosterone')({port:3000})

describe('Location Controller', function(){

    before(function(){

    })
    
    describe('GET /location/new' , function(){

        it('should render a response', function(done){
            testosterone.get('/location/new', function(res){
                res.statusCode.should.equal(200);
                res.body.should.match(/<!DOCTYPE html>/);
                done();
            });
        });

        it('should display a form', function(done){
            request('/location/new', function(error, response, body){
                should.not.exist(error);
                response.statusCode.should.equal(200);
                body.should.match(/<form/);
                done();
            });
        });
    });

    describe('POST /location/create', function(){

        it('should be successful', function(done){
            request.post('http://localhost:3000/location/create', function(error, response, body){
                should.not.exist(error);
                response.responseCode.should.equal(302);
                done();
            });
        });

        it('should render the new form on error', function(done){
            request.post('http://localhost:3000/location/create', function(error, response, body){
                should.not.exist(error);
                response.statusCode.should.equal(200);
                body.should.match(/<form/);
                done();

            });
        });

        it('should pass the correct data');
    });

    describe('GET /location', function(){

        it('should be successful', function(done){
            request("http://localhost:3000/location", function(error, response, body){
                should.not.exist(error);
                response.statusCode.should.equal(200);
                done();
            });

        });

        it('should respond with json', function(done){
            request("http://localhost:3000/location", function(error, response, body){
                should.not.exist(error);
                response.should.be.json;
                done();
            });

        });

        it('should return error with invalid param', function(done){
            request("http://localhost:3000/location?limit=500", function(error, response, body){
                response.responseCode.should.equal(403);
                JSON.parse(body).should.have.property('errors');
                done();
            });
        });
    });

    describe('GET /location/:id/edit', function(){
        it('should be successful', function(done){
            request('http://localhost:3000/location/1/edit', function(error, response, body){
                should.not.exist(error);
                response.responseCode.should.equal(200);
                done();
            });
        });

        it('should display the correct data', function(done){
            request('http://localhost:3000/location/1/edit', function(error, response, body){
                response.responseCode.should.equal(200);
                body.should.match(/Elver Park/);
                done();
            });
        });

        it('should display an error for an invalid id', function(done){
            request('http://localhost:3000/location/1/edit', function(error, response, body){
                body.should.match(/error/);  
                done();
            });
        });

    });

    describe("PUT /location/:id", function(){
        it('should be successful', function(done){
            request.put('http://localhost:3000/location/1', function(error, response, body){
                response.responseCode.should.equal(200);
                done();
            });
        });

        it('should pass back an updated location');

        it('should pass back an error with invalid data');

    });

    describe("DELETE /location/:id", function(){

        it('should be successful');

        it('should pass the right id');

        it('should pass back an error with invalid data');

    });
})

