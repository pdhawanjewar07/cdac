export default {};
function f1() {
    console.log("in f1 ");
}
let p = new Promise((resolve, reject) => {
    let n = 4;
    if (n % 2 == 0)
        resolve("number " + n + "is even number ");
    reject("false");
});
// ---------------------------------------------------------------------------
// (priority)1. Call Stack (synchronous code)
console.log("in demo execution ");
// (priority)3. Macrotask Queue (Timers, setTimeout, setInterval, etc.)
setTimeout(() => {
    console.log("in settimeout ");
}, 0); // 0 miliseconds does not mean immediate execution
// (priority)2. Microtask Queue (Promises)
p.then((message) => console.log(message)).catch((error) => console.log(error));
// (priority)1. Call Stack (synchronous code)
f1();
/*  >> Execution Order:
1. Synchronous code executes first (Call Stack)
  - console.log("in demo execution")
  - setTimeout registered
  - Promise created
  - then() registered
  - f1() executes

2. After the call stack is empty, the Event Loop processes the Microtask Queue
  - Promise.then() runs

3. Finally, the Macrotask Queue runs
  - setTimeout callback executes
*/
/*  >> Explanation:
- JavaScript runtime processes three main queues:
Priority:
1. Call Stack (synchronous code)
      ↓
2. Microtask Queue (Promises)
      ↓
3. Macrotask Queue (Timers, setTimeout, setInterval, etc.)
*/
/*  >> Output will be:
in demo execution
in f1
number 4is even number
in settimeout
*/
