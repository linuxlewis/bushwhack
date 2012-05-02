var Location = require('../../app/controllers/Location.js');
var should = require('should');
var request = require('request');
var util = require('util');

describe('Location Controller', function(){

    describe('GET /location/new' , function(){

        it('should render a res', function(done){
            request.get('http://localhost:3000/location/new', function(err, res, body){
                res.statusCode.should.equal(200);
                body.should.match(/<!DOCTYPE html>/);
                done();
            });
        });

        it('should display a form', function(done){
            request.get('http://localhost:3000/location/new', function(err, res, body){
                res.statusCode.should.equal(200);
                body.should.match(/<form/);
                done();
            });
        });
    });

    describe('POST /location', function(){

        it('should be successful', function(done){
            request.post('http://localhost:3000/location', function(err, res, body){
                should.not.exist(err);
                res.statusCode.should.equal(302);
                done();
            });
        });

        it('should render the new form on error', function(done){
            request.post('http://localhost:3000/location', function(err, res, body){
                should.not.exist(err);
                res.statusCode.should.equal(200);
                done();

            });
        });

        it('should pass the correct data');
    });

    describe('GET /location', function(){

        it('should be successful', function(done){
            request.get("http://localhost:3000/location", function(err, res, body){
                should.not.exist(err);
                res.statusCode.should.equal(200);
                done();
            });
        });

        it('should respond with json', function(done){
            request.get("http://localhost:3000/location", function(err, res, body){
                should.not.exist(err);
                res.should.be.json;
                done();
            });

        });

        it('should return error with invalid param', function(done){
            request.get("http://localhost:3000/location?limit=500", function(err, res, body){
                res.statusCode.should.equal(403);
                body.should.have.property('errors');
                done();
            });
        });
    });

    describe('GET /location/:id/edit', function(){

        it('should be successful', function(done){
            request.get('http://localhost:3000/location/2/edit', function(err, res, body){
                should.not.exist(err);
                res.statusCode.should.equal(200);
                body.should.match(/<!DOCTYPE html>/);
                done();
            });
        });

        it('should display the correct data', function(done){
            request.get('http://localhost:3000/location/1/edit', function(err, res, body){
                res.statusCode.should.equal(200);
                res.should.be.html
                done();
            });
        });

        it('should display an error for an invalid id', function(done){
            request.get('http://localhost:3000/location/a/edit', function(err, res, body){
                //body.should.match(/error/);  
                done();
            });
        });
    });

    describe("PUT /location/:id", function(){
        it('should be successful', function(done){
            request.put('http://localhost:3000/location/1', function(err, res, body){
                res.statusCode.should.equal(200);
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
});

