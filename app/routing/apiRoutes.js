var friends = require("../data/firends");
var path = require("path");
var express = require("express");

var app = express();
// console.log(friends);//friends is a arrary
module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        var newUserData = req.body;
        console.log(newUserData);
        
        // send result back to survey.html as "data", there results will be organized into modals
        res.json(newUserData);
    });  
};


