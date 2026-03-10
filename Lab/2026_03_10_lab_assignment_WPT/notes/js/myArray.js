let d = [12, 34, 25, 56, 33, 102, 23, 48]

console.log(d);
let newArray = d.filter((num) => num % 2 == 0)
console.log(newArray)

// sort array data 
let f = d.sort((n1, n2) => (n1 - n2));
console.log(f);