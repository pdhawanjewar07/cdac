// Node stores CLI args in: process.argv
// Structure: [ 'node', 'file.js', ...your_args ]
// So real inputs start from index 2
const args = process.argv.slice(2);

// Convert to numbers
const numbers = args.map(Number);

// Validate input (optional but not stupid to skip)
if (numbers.some(isNaN)) {
  console.log("Invalid input. Pass only numbers.");
  process.exit(1);
}

// Filter even numbers and sum
const sum = numbers
  .filter(num => num % 2 === 0)
  // acc = accumulator, curr = current num
  .reduce((acc, curr) => acc + curr, 0);

console.log("Sum of even numbers:", sum);


// Run it: node script.js 1 2 3 4 5 6