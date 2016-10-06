'use strict';

const app = require('../app.js');
const assert = require('assert');

describe('App', () => {
    describe('#isMultipleOfHundred()', () => {
        it('should return true when the value is multiple of 100', () => {
            const actual = app.isMultipleOfHundred(100);
            assert.equal(actual, true);
        });

        it('should return false when the value is multiple of 100', () => {
            const actual = app.isMultipleOfHundred(145);
            assert.equal(actual, false);
        });
    });
});
