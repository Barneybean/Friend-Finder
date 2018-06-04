# Friend-Finder
* Site deplyed in heroku https://friendfinder-gao.herokuapp.com/

## developer 
Chunjin (William) Gao 

## Motivation 
* This project is a homework, also a great project to practice linking server and htmls which means its also my first project that utilize both front end and back end components. 

## How does it work 
* Go to https://friendfinder-gao.herokuapp.com/ and click on "Go to Survey" Button 
* Then answer all questions in the survey page --> click submit 
* The app will find the best matching friends for you! Cool

## Core Tech
`Express` `node.js` `jquery` `bootstrap` `chosen`

## Core code 

```$.post("/api/friends", userData, function(data) {
        console.log(data); //is equal to matching friend from friends.js
        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr({"src": data.photo, "height": "150px", "width": "150px"});
        
        // Show the modal with the best match
        $("#results-modal").modal("toggle");
    });
```

``` module.exports = function(app) {
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
```

** please let me know if you have any opinon or comments