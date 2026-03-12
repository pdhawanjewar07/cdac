function outer() {
    let outerVar = "I'm in the outer scope!";// outer 
    function inner() {
        console.log(outerVar);// outer 
        outerVar = "Updated"
    }
    return inner;
    function inner1() {
        console.log("inner1");// outer 
        outerVar = "Updated"
    }
    //return inner1;
}
const closure = outer();// def inner 
console.log(typeof (closure))
closure();  //   inner
closure();  // inner 
