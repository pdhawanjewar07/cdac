export {};
function result(a, b, callback) {
    callback(a, b);
}
function add(a, b) {
    console.log(`${a}(a) + ${b}(b) = ${a + b}`);
}
function subtract(a, b) {
    console.log(`${a}(a) - ${b}(b) = ${a - b}`);
}
function multiply(a, b) {
    console.log(`${a}(a) * ${b}(b) = ${a * b}`);
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by 0 not allowed!");
        // return;  // not needed
    }
    console.log(`${a}(a) / ${b}(b) = ${(a / b).toFixed(5)}`);
}
let num_a = 10;
let num_b = 0;
// used here
result(num_a, num_b, add);
result(num_a, num_b, subtract);
result(num_a, num_b, multiply);
result(num_a, num_b, divide);
