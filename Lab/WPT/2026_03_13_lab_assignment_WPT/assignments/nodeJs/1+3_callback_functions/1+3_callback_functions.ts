export {};

function result(a: number, b: number, callback: (a: number, b: number) => void): void{
  callback(a, b);
}

function add(a: number, b: number): void{
  console.log(`${a}(a) + ${b}(b) = ${a+b}`);
}

function subtract(a: number, b: number): void{
  console.log(`${a}(a) - ${b}(b) = ${a-b}`);
}

function multiply(a: number, b: number): void{
  console.log(`${a}(a) * ${b}(b) = ${a*b}`);
}

function divide(a: number, b: number): void{
  if (b === 0){
    throw new Error("Division by 0 not allowed!");
    // return;  // not needed
  }
  console.log(`${a}(a) / ${b}(b) = ${(a/b).toFixed(5)}`);
}

let num_a: number = 10;
let num_b: number = 0;

// used here
result(num_a, num_b, add);
result(num_a, num_b, subtract);
result(num_a, num_b, multiply);
result(num_a, num_b, divide);
