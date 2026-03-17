const fs = require('fs');
//ASYNC 

// open the file  truncate 

// append 
fs.writeFileSync("new.txt", "Hello Node JS 1 ");
fs.writeFileSync("new.txt", "Hello Node JS  2 ");
fs.appendFile("new.txt", "Hello Node JS 3");


let data = "asbjbjsdfksadh";
fs.writeFile('output.txt', data, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
});
