var randomIntegers = [42, 7, 91, 16, 58, 3, 74, 29, 65, 11];
// display as it is
console.log("Original array: " + randomIntegers);
// only even numbers
var evens = randomIntegers.filter(function (n) { return n % 2 === 0; });
console.log("evens: " + evens);
// only odd numbers
var odds = randomIntegers.filter(function (n) { return n % 2 !== 0; });
console.log("odds: " + odds);
// sort the array
var sorted_arr = randomIntegers.sort(function (a, b) { return a - b; });
console.log("Sorted array: " + sorted_arr);
