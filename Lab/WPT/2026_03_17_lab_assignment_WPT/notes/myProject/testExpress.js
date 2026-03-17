
const express = require('express');

const fs = require('fs');

const app = express();
//all records data  --- users.json 
app.get("/", (req, res) => {




    fs.readFile
        (__dirname + "/users.json", "utf8", (err, data) => {
            res.write(data);
            res.end();
            res.send(data)
        })

    //res.send("From Express JS ")
})

// key = value    request parameters 
//http://localhost:5050/3   
//:id  === path param 3
app.get('/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8',
        function (err, data) {
            var users = JSON.parse(data);//object users[user2]
            var user = users["user" + req.params.id]
            //var user = users[user3]
            res.end(JSON.stringify(user));//json 
        });
})

app.post("/add", (req, res) => {

    res.send("From POST Method Express JS ")
})

app.post('/', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        // body postman // json 
        var user = req.body.user4;
        users["user" + user.id] = user//add 
        res.end(JSON.stringify(users));
    });
})

// delete   http Rest API 
app.delete('/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8',
        function (err, data) {
            var users = JSON.parse(data);//object users[user2]
            // find the  
            let d = users[req.param.id]
            // delete 

            res.end(JSON.stringify(user));//json 
        });
})

// update record 
app.put('/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var id = "user" + req.params.id;//user3
        var user = data[id];
        delete data[id];
        res.end(JSON.stringify(data));
    });
})


app.listen(5050);