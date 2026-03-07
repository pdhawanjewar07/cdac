// Types of functions in js

// normal function
function function1(a, b){
    console.log("from normal function: " + (a+b))
};
function1(2, 8);

// nameless variable function
let function2_var = function(a, b){
    console.log("from nameless variable function: " + (a+b))
};
function2_var(2, 7);

// nameless arrow function
let function3 = () => {console.log("from nameless arrow function: " + true)};
function3();

// nameless execute now function
(
    function(){
        console.log("from execute now nameless function(4)" + true);
    }
)();