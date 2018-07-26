
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var match = [50, 10];
        for (var i = 0; i < friends.length; i++) {
            var enemy = 0;
            for (var i = 0; i < req.body.scores.length; i++) {
                enemy += Math.abs(parseInt(friends[i].scores[i]) - parseInt(req.body.scores[i]));
            }
        }
        
    });

    console.log(friends);
};
