//  File Handling Node 
const fs = require('fs');
//current folder 
let content = fs.readFileSync("data.txt", 'utf8');
console.log("From File ")
console.log(content);

// promise 
fs.readFile("data1.txt", 'utf8', (err, data) => {

    if (err) console.log(err)
    console.log(data)
})//  async 