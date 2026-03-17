const http = require('http');

//import 
// request  response 
const server1 = http.createServer(fromServer);

function fromServer(request, res) {
    // Server 
    res.write("<h1>From Server</h1>");
    res.end();// response complete 
}
//service port 
server1.listen(5050);// start 

