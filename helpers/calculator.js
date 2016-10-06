'use strict';

exports.compoundInterest = (data) => {
    return (data.amountRequested * (Math.pow(1 + data.monthlyRate / data.compoundInterval, (data.compoundInterval * (data.calculationPeriodInMonths / 12))))).toFixed(2);
};
