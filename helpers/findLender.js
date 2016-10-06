'use strict';

const sortBy = (list, option) => {
    return list.sort(option);
};

exports.increasingRate = (a, b) => {
    if (a.rate < b.rate) {
        return -1;
    }
    if (a.rate > b.rate) {
        return 1;
    }
    return 0;
};

exports.lowerRate = (lenders, amount) => {
    const lendersSortedByRate = sortBy(lenders, this.increasingRate);
    let lenderNo = 0;
    while (lenderNo < lendersSortedByRate.length) {
        if (lendersSortedByRate[lenderNo].available >= amount) {
            return lendersSortedByRate[lenderNo];
        } else {
            lenderNo++;
        }
    }
    return null;
};
