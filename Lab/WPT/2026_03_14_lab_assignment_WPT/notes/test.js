export function check() {
    let a = "123416a";//string char 
    let sum = 0;
    for (var i = 0; i < a.length; i++) {
        //console.log(typeof (a[i]));
        if (!isNaN(a[i]))
            sum += parseInt(a[i]);
    }
    console.log("Addition is " + sum)
    console.log(`sum of ${a} is ${sum}`);
}

export function call() {

}
/*
let data = "line 1" +
    "line2"

let v = 124584
let data1 = `line 1
            line2    ${v}`*/

//check();