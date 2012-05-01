var Location = require('../../app/controllers/Location.js');
var request = require('request');
var should = require('should');

describe('Location Controller', function(){

    before(function(){

    })
    
    describe('GET /location/new' , function(){
        it('should render a response', function(done){
            request('http://localhost:3000/location/new', function(error, response, body){
                should.not.exist(error);
                response.statusCode.should.equal(200);
                body.should.match(/<!DOCTYPE html>/);
                done();
            });
        });

        it('should display a form');
    });
})

