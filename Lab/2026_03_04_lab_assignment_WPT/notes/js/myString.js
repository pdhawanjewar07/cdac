let name1 = 'ABC';// String char array 
let name2 = "ABC";
console.log(name1 == name2);
console.log(name1 === name2);// type + content 
// d Object memory location 
let d1 = new String("String Data ");
let d2 = new String("iet01 ");
console.log(d1 == d2);
console.log(d1 === d2);
//console.log(d.toUpperCase());

console.log(d1.charAt(3));
console.log(d2.startsWith("iet"));

let emailId = "abc@gmail.com";

// String Data ---  format of email id   validate

// abc.123@gmail.com -1 

console.log(emailId.indexOf('@'));
emailId.lastIndexOf('.');