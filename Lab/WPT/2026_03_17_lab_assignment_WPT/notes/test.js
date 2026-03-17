console.log(__dirname)

console.log("file name")
console.log(__filename);
//C:\Users\Admin\Desktop\WPT2026\17032026\test.js
const p = require('path');
//windows     linux /Desktop/
let info = p.parse("C:\\Users\\Admin\\Desktop\\WPT2026\\17032026\\test.js");

console.log(info.name);
console.log(info.ext);
console.log(info.base);
console.log(info.dir);

//os module server

// node js database 

