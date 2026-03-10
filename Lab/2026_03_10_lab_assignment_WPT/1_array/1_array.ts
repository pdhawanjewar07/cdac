

const randomIntegers = [42, 7, 91, 16, 58, 3, 74, 29, 65, 11];

// display as it is
console.log("Original array: " + randomIntegers);


// only even numbers
const evens = randomIntegers.filter(n => n % 2 === 0);
console.log("evens: " + evens);


// only odd numbers
const odds = randomIntegers.filter(n => n % 2 !== 0);
console.log("odds: " + odds);


// sort the array
const sorted_arr = randomIntegers.sort((a, b) => a - b);
console.log("Sorted array: " + sorted_arr);
