//exception Run Time Error
const fs = require('fs');
try {
    let content = fs.readFileSync("data1.txt", 'utf8');
    console.log("From File ")
    console.log(content);
} catch (error) {
    console.log("File Not Found  ")
    //console.log(error);
}