
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var match = [50, 10];
        var smallestDifference = 1000;
        for (var i = 0; i < friends.length; i++) {
            
            var enemy = 0;
            for (var j = 0; j < req.body.scores.length; j++) {
              (enemy += Math.abs(parseInt(friends[i].scores[i]) 
              - parseInt(req.body.scores[i])));
            }
            if(enemy <= smallestDifference) {
                enemy = smallestDifference
            }
            // res.body.scores
                
            }
            return smallestDifference;

            friends.name[0].push(req.body.modal);
            friends.name[1].push(req.body);
            friends.name[2].push(req.body);
            friends.name[3].push(req.body);



        
    });

    console.log(friends);
};
