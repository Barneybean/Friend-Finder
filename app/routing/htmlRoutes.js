//depencies 
var express = require("express");
var path = require("path");
var friends = require("../data/firends");

var app = express();



module.exports = function(app) {
    //home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //friends objs
    app.get("/storedFriends", function(req, res) {
        res.json(friends);
    });
}

