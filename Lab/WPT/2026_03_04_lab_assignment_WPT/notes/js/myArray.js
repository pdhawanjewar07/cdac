let names = ['A', 'B', 'C', 123];// array 
//class Array   Object 
console.log(typeof (names));
console.log(names);
console.log(names[3]);  // index 
names[4] = 'new data';
console.log(names);
names[2] = "new"  //  change
console.log(names);

//names[14] = 'new data 14';
//console.log(names.length)
//console.log(names);

//add data in array at last index ;
//start  logic 
// inbetween index 
names.push("p");
console.log(names);
names.push("r");
//names.pop();