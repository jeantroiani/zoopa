'use strict';

const assert = require('assert');
const calculator = require('../helpers/calculator.js');

describe('calculator', () => {
    let data;

    beforeEach(() => {
        data = { amountRequested: 100,
            monthlyRate: 0.05,
            compoundInterval: 12,
            calculationPeriodInMonths: 36
        };
    });

    describe('#compoundInterest()', () => {
        it('should return £116.15 when asked to caculated with £100 at 5%', () => {
            const actual = calculator.compoundInterest(data);
            assert.equal(actual, 116.15);
        });

        it('should return £1232.93 when asked to caculated with £1000 at 7%', () => {
            data.amountRequested = 1000;
            data.monthlyRate = 0.07;
            const actual = calculator.compoundInterest(data);
            assert.equal(actual, 1232.93);
        });
    });
});
