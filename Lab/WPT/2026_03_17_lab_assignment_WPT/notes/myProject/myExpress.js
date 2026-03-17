const express = require('express');

const app = express();

app.use(express.json());
// read user.json 

var fs = require("fs");

var p = require("path");


app.get('/', function (req, res) {
    res.send("index.html")
})



app.get("/getData", (req, res) => {


    //read the file users.json 

    // object -> json 
    res.send("json data ")
})

app.listen(5050);