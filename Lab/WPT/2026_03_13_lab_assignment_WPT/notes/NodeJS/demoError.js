function result(e, r) {
    if (e) {
        console.log(e.message)
    } else {
        console.log(`result :` + r)
    }
}
function divide(a, b, callback) {

    if (b == 0) {
        callback(new Error("division by zero not possible "),
            null)
    } else {
        callback(null, (a / b))
    }
}
function add(a, b, callback) {

    if (b == 0) {
        callback(new Error("zero data is not accepted "),
            null)
    } else {
        callback(null, (a / b))
    }


}
console.log(divide(4, 2, result))
console.log(divide(2, 0, result));
console.log(add(2, 0, result));