export default {};
// -------------------------------------------------------------
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 finished");
        callback();
    }, 1_000);
}
function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 finished");
        callback();
    }, 1_000);
}
function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 finished");
        callback();
    }, 1_000);
}
// nested callbacks
step1(() => {
    step2(() => {
        step3(() => {
            console.log("Using Nested Callbacks - All steps completed");
        });
    });
});
// -------------------------------------------------------------
function step_1() {
    return Promise.resolve("step 1 - Executed");
}
function step_2() {
    return Promise.resolve("step 2 - Executed");
}
function step_3() {
    return Promise.resolve("step 3 - Executed");
}
step_1()
    .then((msg) => { console.log(msg); return step_2(); })
    .then((msg) => { console.log(msg); return step_3(); })
    .then((msg) => { console.log(msg); })
    .then(() => { console.log("Using Promises - All steps completed"); })
    .catch(console.log);
/*  >> Notes:
- .then() chains functions
- those functions return promises
*/
