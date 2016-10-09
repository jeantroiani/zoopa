'use strict';

const CSVParser = require('./CSVParser.js');
const calculator = require('./helpers/calculator.js');
const formatResult = require('./helpers/formatResult.js').printOut;
const findLender = require('./helpers/findLender.js');
const log = require('./helpers/log.js');
const dataFileName = process.argv[2];
const amountRequested = Number(process.argv[3]);
const config = require('./configVariables').variables;

exports.isMultipleOfHundred = number => {
    return number % 100 === 0;
};

(() => {
    const calculationPeriodInMonths = config.calculationPeriodInMonths;
    const compoundInterval = config.compoundInterval;

    if (amountRequested < 1000 || amountRequested > 15000) {
        return log.messageInConsole('amount needs to be bigger than 1000 and smaller than 15000');
    }
    if (!amountRequested || !dataFileName) {
        return log.messageInConsole('missing parameters, type data file name and amount requested');
    }
    if (!this.isMultipleOfHundred(amountRequested)) {
        return log.messageInConsole(`${amountRequested} is not multiple of 100, please try with another number that is`);
    }
    CSVParser.readFilePromise(dataFileName).then(data => {
        const lenderAvailable = findLender.lowerRate(data, amountRequested);
        if (!lenderAvailable) {
            return log.messageInConsole('It is not possible to provide a quote right now.');
        }
        const monthlyRate = lenderAvailable.rate;
        const total = calculator.compoundInterest({
            amountRequested,
            monthlyRate,
            compoundInterval,
            calculationPeriodInMonths
        });
        log.messageInConsole(formatResult({
            amountRequested,
            monthlyRate,
            total,
            calculationPeriodInMonths
        }));
    });
})();
