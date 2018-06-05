var friends = require("../data/firends");
var path = require("path");
var express = require("express");

var app = express();
// console.log(friends);//friends is a arrary
module.exports = function (app) {  //app is not chicken its app.post
    app.post("/api/friends", function (req, res) {

        var newUserData = req.body;
        // console.log(newUserData);
        //{ name: 'WILLIAM',
        //   photo: 'seewilliam.gao@gmail.com',
        //   scores: [ '2', '2', '3', '2', '2', '2', '4', '3', '1', '3' ] }
        // to hold abs diff of all person's comparison
        var diff = [];
        
        var userScores = newUserData.scores;

        for (var i=0; i<friends.length; i++) {
            var targetScores = friends[i].scores;
            // to hold sum of absolute difference in each comparison
            var absDiff = 0;
            for (var j=0; j<friends[i].scores.length; j++) {
                absDiff += Math.abs(newUserData.scores[j] - friends[i].scores[j]);
            }
            diff.push(absDiff);
        }
        //find the min value in diff array
        var minVal = Math.min.apply(null, diff);
        var indexMin = diff.indexOf(minVal);
        // console.log(indexMin);
        // get the matching person in the friends array, return as a obj
        var MatchingFriend = friends[indexMin];

        // send result back to survey.html as "data", there results will be organized into modals
        res.json(MatchingFriend);
        var newFriendObj = {
            "name": newUserData.name,
            "photo": newUserData.photo,
            "scores": newUserData.scores
        }
        friends.push(newFriendObj);
    });  
};


