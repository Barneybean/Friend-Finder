//depencies 
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//set up express
var app = express();
var  PORT = process.env.PORT || 7700;

//set up the express app to handle data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//start server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
})