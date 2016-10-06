'use strict';

const fs = require('fs');
const log = require('./helpers/log.js');

exports.removeLastNewLine = CSV => {
    if (CSV.length !== (CSV.lastIndexOf('\n') + 1)) {
        return CSV;
    }
    return CSV.slice(0, CSV.length - 2);
};

exports.toObj = CSV => {
    if (!CSV) {
        return null;
    }
    let arrayOfLenders = [];
    const arrUsers = this.removeLastNewLine(CSV).split('\n');
    arrayOfLenders = arrUsers.map(user => {
        return {
            lender: user.split(',')[0],
            rate: Number(user.split(',')[1]),
            available: Number(user.split(',')[2])
        };
    });
    return arrayOfLenders;
};

exports.solvePath = (filePath) => {
    if (filePath.indexOf('.') !== 0) {
        return `./data/${filePath}`;
    }
    return filePath;
};

exports.readFilePromise = file => {
    const fileNameSolved = this.solvePath(file);
    return new Promise((fulfill, reject) => {
        const data = fs.readFile(fileNameSolved, 'utf8', (err, data) => {
            if (err) {
                log.messageInConsole(err);
                reject(err);
            } else {
                const obj = this.toObj(data);
                fulfill(obj);
            }
        });
    });
};
