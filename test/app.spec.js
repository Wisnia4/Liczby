'use strict';
var expect = require('chai').expect;
var app = require('../app/app');

describe('Prime factor - function prime', function ()
       {
           describe('when "n" is a positive number', function () {

               it('should return primes factor when "n" is integer', function () {
                   expect(app.prime(360)).to.equal('Prime factor 360 is: 2 2 2 3 3 5');
               });
               it('should return prime factor when "n" is float', function () {
                   expect(app.prime(75.67)).to.equal('Prime factor 75.67 is: 75.67');
               });

           });

           describe('when "n" is a negative number', function () {
               it('should return false when "n" is integer', function () {
                   expect(app.prime(-360)).to.equal(false);
               });
               it('should return false when "n" is float', function () {
                   expect(app.prime(-75.67)).to.equal(false);
               });
           });

           describe('when "n" is equal zero', function () {
           it('should return false when "n" equal zero', function () {
               expect(app.prime()).to.equal(false);
           });

       });

           describe('when "n" is not a number', function () {
               it('should return false when "n" is not  a number', function () {
                   expect(app.prime('something')).to.equal(false);
               });

           });

});

describe('Automorphic number - automorphic', function ()
{
    describe('when "n" is a automorphic number', function () {

        it('should return receipt when "n" is 25', function () {
            expect(app.automorphic(25)).to.equal('Number 25 is an automorphic number');
        });
        it('should return receipt when "n" is zero', function () {
            expect(app.automorphic(0)).to.equal('Number 0 is an automorphic number');
        });

    });

    describe('when "n" is not a automorphic number', function () {
        it('should return false when "n" is integer', function () {
            expect(app.automorphic(24)).to.equal(false);
        });
        it('should return false when "n" is float', function () {
            expect(app.automorphic(-75.67)).to.equal(false);
        });
    });



    describe('when "n" is not a number', function () {
        it('should return false when "n" is not  a number', function () {
            expect(app.automorphic('something')).to.equal(false);
        });

    });

});