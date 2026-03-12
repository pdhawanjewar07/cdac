function sayHello(name = 'Guest') {
    console.log("Hello " + name);
}
sayHello();
sayHello("Amit");

function square(n) {
    // console.log('in square');
    return (n * n);
}
let ans = square(3);  // function call
console.log(ans);
console.log(square(4));

let a = square;  // 
//console.log(typeof (a));//function 
console.log(a);
console.log(a(5));// square 

// anno
let b = function () {
    console.log("in function");
}
console.log(b());

let c = (n) => (n * n);







