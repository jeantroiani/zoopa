'use strict';

exports.printOut = data => {
    const monthlyRepayment = (data.total / data.calculationPeriodInMonths).toFixed(2);
    const monthlyRatePercentage = (data.monthlyRate * 100).toFixed(1);
    const formattedString = `Requested amount: £${data.amountRequested}
Rate: ${monthlyRatePercentage}%
Monthly repayment: £${monthlyRepayment}
Total repayment: £${data.total}
`;
    return formattedString;
};
