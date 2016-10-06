'use strict';

const assert = require('assert');
const CSVParser = require('../CSVParser.js');

describe('CSVParser', () => {
    let CSVFile;

    beforeEach(() => {
        CSVFile = "Jean, 7.0, 777\nMaria, 1.6, 200";
    });

    describe('#toObj()', () => {
        it('should return an object out of a CSV file', () => {
            const actual = CSVParser.toObj(CSVFile);
            assert.equal(typeof actual, 'object');
        });
    });

    describe('#solvePath()', () => {
        it('should return argument plus path to data folder if is a file name', () => {
            const actual = CSVParser.solvePath('myFavouriteFile');
            assert.equal(actual, './data/myFavouriteFile');
        });

        it('should return the argument if is a path', () => {
            const actual = CSVParser.solvePath('../../myFavouriteFile');
            assert.equal(actual, '../../myFavouriteFile');
        });
    });

    describe('#removeLastNewLine()', () => {
        it('should remove a new line symbol from a CSV if it has one', () => {
            CSVFile = "Jean, 7.0, 777\nMaria, 1.6, 200\n";
            const actual = CSVParser.removeLastNewLine(CSVFile);
            assert.equal(actual.slice(-1), 0);
        });

        it('should return the CSV file passed on the argument if it has no new line at the end', () => {
            const actual = CSVParser.removeLastNewLine(CSVFile);
            assert.equal(actual.slice(-1), 0);
        });
    });
});
