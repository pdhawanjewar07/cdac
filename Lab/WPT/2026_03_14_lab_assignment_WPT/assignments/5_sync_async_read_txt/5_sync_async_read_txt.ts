import fs = require("fs");
// const fs = require("fs");
// import * as fs from "fs";  // different setup needed
// ---------------------------------------------------------------------

// 1. >> pwsh cmd (ni sample.txt) 
// [ni(alias for New-Item) used to make new file]

// 2. >> Write some random data to sample.txt
fs.writeFileSync("sample.txt", "Hello from TypeScript\n", "utf-8");

// 3. >> Read sample.txt(Synchronously)
const sync_read_txt_data: string = fs.readFileSync("sample.txt", "utf-8");
console.log("sync_read_txt_data : ");
console.log(sync_read_txt_data);

// 4. >> Read sample.txt(Asynchronously, using callback)
fs.readFile("sample.txt", "utf-8", (error, async_callback_read_txt_data) => {
  // - fs.readFile returns void.
  // - you can only access data via a callback function
  if (error) {
    console.error(error);
    return;
  }
  console.log("async_callback_read_txt_data : ");
  console.log(async_callback_read_txt_data);
});

// 5. >> Read sample.txt(Asynchronously, using promises) i.e., Correct way
const fs1 = require("fs").promises;

async function async_promise_read_txt_data() {
  const async_promise_read_txt_data: string = await fs1.readFile("sample.txt", "utf-8");
  console.log("async_promise_read_txt_data : ");
  console.log(async_promise_read_txt_data);
}

async_promise_read_txt_data();

