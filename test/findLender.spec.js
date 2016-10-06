'use strict';

const findLender = require('../helpers/findLender.js');
const assert = require('assert');

describe('findLender', () => {

    describe('#increasingRate()', () => {
        let lenderA, lenderB, lenderC;

        beforeEach(() => {
            lenderA = {rate: 1};
            lenderB = {rate: 2};
            lenderC = {rate: 2};
        });

        it('should return -1 if first argument is smaller than second', () => {
            const actual = findLender.increasingRate(lenderA, lenderB);
            assert.equal(actual, -1);
        });

        it('should return 1 if first argument is bigger than second', () => {
            const actual = findLender.increasingRate(lenderB, lenderA);
            assert.equal(actual, 1);
        });

        it('should return 0 if both argument are equal', () => {
            const actual = findLender.increasingRate(lenderB, lenderC);
            assert.equal(actual, 0);
        });
    });

    describe('#lowerRate()', () => {
        let lendersList, lenderA, lenderB, lenderC;

        beforeEach(() => {
            lenderA = {rate: 1, available: 100};
            lenderB = {rate: 2, available: 200};
            lendersList = [lenderA, lenderB];
        });

        it('should return a lender if the amount requested is available from the pool of lenders', () => {
            const actual = findLender.lowerRate(lendersList, 100);
            assert.equal(actual, lenderA);
        });

        it('should return null if the amount requested is not available from the pool of lenders', () => {
            const actual = findLender.lowerRate(lendersList, 300);
            assert.equal(actual, null);
        });
    });
});
