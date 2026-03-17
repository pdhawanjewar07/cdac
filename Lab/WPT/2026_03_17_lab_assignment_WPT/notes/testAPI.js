const http = require('http');
const url = require('url');

const s1 = http.createServer(handleData);
let myData = [12, 23, 34, 56, 78];
function handleData(request, response) {
    const urlData = url.parse(request.url, true)
    console.log(request.method)

}

s1.listen(2030)