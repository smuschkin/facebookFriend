
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log("data received");
        // var smallestDifference = 1000;
        var scoreDifferences = [];
        for (var i = 0; i < friends.length; i++) {

            var lowestScore = 0;
            for (var j = 0; j < req.body.scores.length; j++) {
                (lowestScore += Math.abs(parseInt(friends[i].scores[j])
                    - parseInt(req.body.scores[j])));
            }
            scoreDifferences.push(lowestScore);

            // if (enemy <= smallestDifference) {
            //     enemy = smallestDifference
            // }

        }
        console.log(scoreDifferences);
        console.log(Math.min(...scoreDifferences));

        var matchingScore = scoreDifferences.indexOf(Math.min(...scoreDifferences));
        res.json(friends[matchingScore]);

        friends.push(req.body);
        // fs.writeFile with json file 
    });

    // console.log(friends);
};
