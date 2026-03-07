function add() {
    console.log("add function ");
}

function add(a1, a2) {
    console.log("add function with 2 parameters ");
    console.log(a1 + a2);
}

function add(a1, a2, a3) {
    console.log("add function with 3 parameters ");
    console.log(a1 + a2 + a3);
}

function add(a1, a2, a3, a4) {
    console.log("add function with 4 parameters ");
    console.log(a1 + a2 + a3 + a4);
}

// accept zero args or n args   varargs 
//array
function add1(...a) {
    // console.log(a[1]);
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    console.log("inside add1 function sum  " + sum);
}

add1();
add1(1, 2);
add1(1, 2, 3, 4)

add(12, 13, 1);