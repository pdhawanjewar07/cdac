function greet(name, callback) {
    console.log("Hello " + name);
    setTimeout(function () {
        console.log("==== Executed callback after 2 seconds ====");
        callback();
    }, 2000);
}
function sayBye() {
    console.log("Goodbye");
}
greet("John", sayBye);
