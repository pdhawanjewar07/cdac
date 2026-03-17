const http = require('http');
const url = require('url');

const s1 = http.createServer(handleData);
let myData = [12, 23, 34, 56, 78];
function handleData(request, response) {

    const queryParams = url.parse(request.url, true).query;
    console.log(queryParams.num);
    let d = url.parse(request.url, true).query
    console.log(d);

    if (request.method == 'GET') {

        if (request.url == '/') {
            response.write("Hello From Server")
        }

        if (request.url == '/getData') {
            response.write("Data " + myData)
        }


    }
    // add the data 
    if (request.method == 'POST') {


        //console.log(response.body);
        // console.log(request.url)
        // let link = request.url;
        //let d = link.parse();
        const queryParams = url.parse(request.url, true).query;
        console.log("dddd : " + queryParams);
        let d = url.parse(request.url, true).query
        console.log(d);

        let paramaters = d.query;
        console.log("Data from URL " + paramaters.num)

        let newData = JSON.stringify(paramaters);
        console.log(newData);
        console.log("Data from URL " + typeof (newData))
        console.log("Data from URL " + newData["num"])

        // parse 

        if (request.url == '/home') {
            response.write("Home Page")
            myData.push('new');
        }

    }

    response.end();



}

s1.listen(8080, () => {

    console.log("Server Started ")

});