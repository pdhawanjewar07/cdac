const http = require('http')


const myServer =
    http.createServer((request, response) => {

        console.log("Server Started ")
        //text 
        response.setHeader('Content-Type', 'text/plain');
        // html 
        response.setHeader('Content-Type', 'text/html');
        if (request.url == "/") {
            response.write("Hello From Server");
            response.write("<h1>Hello From Server</h1>");
        }

        //console.log(request.url)
        if (request.url == "/about") {
            console.log(request.url)
            // response.write("Method : " + request.method)
            response.write("<br>About us");
        }
        console.log(request.url)
        if (request.url == '/home') {
            //post --- postman 
            response.write(request.method)//GET  
            response.write("<br>Home Page");
        }
        response.end();// completed

    })
//port 
myServer.listen(8080);