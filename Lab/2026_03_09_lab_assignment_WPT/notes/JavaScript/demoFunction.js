function f1() {
    let d = "100";
    console.log("from f1   " + d);
    function print() {
        console.log("from f1 print  " + d);
    }
    // end of print 
    //print()  
    return print; // calling print()  inside f1 
}// end of f1 
f1();
let d = f1();// call
d();   //output 