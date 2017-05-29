'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('areaOfTrapezoid', function ()
{
    describe('when "a","b" and "h" are non-negative numbers', function ()
    {
        it('should return area of trapezoid', function ()
        {
            expect(app.areaOfTrapezoid(2, 2, 2)).to.equal(88);
            expect(app.areaOfTrapezoid(1, 3, 6)).to.equal(12);
        });
    });

    describe('when "a", "b" or "h" is a negative number', function ()
    {
        it('should return false when "a" is a negative number', function ()
        {
            expect(app.areaOfTrapezoid(-1, 3, 6)).to.equal(false);
        });
        it('should return false when "b" is a negative number', function ()
        {
            expect(app.areaOfTrapezoid(1, -3, 6)).to.equal(false);
        });
        it('should return false when "h" is a negative number', function ()
        {
            expect(app.areaOfTrapezoid(1, 3, -6)).to.equal(false);
        });
    });

    describe('when "a", "b" or "h" is not a number', function ()
    {
        it('should return false when "a" is not a number', function ()
        {
            expect(app.areaOfTrapezoid('text', 3, 6)).to.equal(false);
        });
        it('should return false when "b" is not a number', function ()
        {
            expect(app.areaOfTrapezoid(1, 'text', 6)).to.equal(false);
        });
        it('should return false when "h" is not a number', function ()
        {
            expect(app.areaOfTrapezoid(1, 3, 'text')).to.equal(false);
        });
    });
});
