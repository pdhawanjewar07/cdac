"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function divide(a, b) {
    return new Promise(function (resolve, reject) {
        if (b === 0) {
            reject(new Error("Division by zero"));
        }
        else {
            resolve(Number((a / b).toFixed(5)));
        }
    });
}
divide(4, 3)
    .then(function (res) { return console.log(res); })
    .catch(function (err) { return console.error(err); });
divide(4, 0)
    .then(function (res) { return console.log(res); })
    .catch(function (err) { return console.error(err); });
