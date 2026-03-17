const fs = require ("fs");

// 1. >> pwsh cmd (ni product.txt) 
// [ni(alias for New-Item) used to make new file]

// 2. >> Write to sample.txt(Synchronously)
fs.writeFileSync("product.txt", "Writing Synchronous text!");

// 3. >> Write to sample.txt(Asynchronously, using callback)
fs.writeFile("product.txt", "Writing Asynchronous text using callaback!", (error)=>{
  //
  if(error){
    console.log("Error: " + error);
  }
  console.log("Write DONE: Asynchronously, using callback");
})

// 4. >> Write to sample.txt(Asynchronously, using promises)
const fs1 = require("fs").promises;

async function async_promise_write_txt_data(){
  //
  await fs1.writeFile("product.txt", "Writing Asynchronous text using promises!");
  console.log("Write DONE: Asynchronously, using promises");
}
async_promise_write_txt_data();








