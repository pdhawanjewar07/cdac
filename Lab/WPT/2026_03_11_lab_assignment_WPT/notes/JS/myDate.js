
// Date 
let d = new Date();

console.log(d);

console.log(d.getFullYear());
console.log(d.getUTCDate());

let d1 = new Date('2002-12-12');
let d2 = new Date('2025-12-01');
console.log(d1 < d2)// compare 

console.log(d2.getFullYear() - d1.getFullYear());