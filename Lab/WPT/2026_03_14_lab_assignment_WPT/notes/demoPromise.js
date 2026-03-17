let p = new Promise((res, rej) => {
    // fetch 
    if (true) res("Data from Promise ")
    rej("Rejected")
}
)
p.then((m) => { console.log(m) })
    .catch((e) => { console.log(e) })


//   async   await 
// take extra 

//function call1() {
//async  ----  function --- Promise 
async function call1() {
    let sample = "Data";

    sample = fetchData()//
    //reading file /  api 
    return await sample;
}

let d = call1();// object Promise 

console.log("call1  " + d.sample)