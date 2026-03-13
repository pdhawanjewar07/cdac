function f1() {
    console.log("f1");
}

setTimeout(() => {
    f1()
}, 3000);


setTimeout(() => {
    console.log("in settimeout")
}, 2000);

function f2() {
    console.log("f2");
    //  read data from File  server  
}

function f3() {
    console.log("f3");
}

f1();
f2();// time consume wait 
f3();




//synchronus  output perfomance 
