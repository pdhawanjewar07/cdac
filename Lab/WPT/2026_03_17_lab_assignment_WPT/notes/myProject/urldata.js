const url = require('url')

let urlData = 'http://localhost:5050/add?name=a&profession=a&password=a&id=4';


let p = url.parse(urlData, true);//object 

console.log(p);

console.log(p.query);

let d = p.query;

console.log(${ 'd.id' })