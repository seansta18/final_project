var express = require('express');
var router = express.Router();
const Results = require("../models/Results");
const Users = require ("../models/User");

router.get('/leaderboard', function (req, res, next) {
    res.render('leaderboard', { title: 'ReactionTests', user : req.user});
})

router.get('/getResults', function(req, res, next) {
    console.log("Getting scores: %s", req.body)
    Results.find(req.body.game_type !== null ? {game_type: req.body.game_type}: {}).lean().exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })    
})

router.get("/getResultsForUser", function(req, res, next) {
    console.log("Getting scores for user: %s", req.body)
    Results.find({owner_id: req.body.owner_id}).lean().exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })
})

router.post('/addResult', function (req, res, next) {
    console.log("AddResult: %s", req.body)
    Results.create({owner_id: req.body.owner_id, game_type: req.body.game_type, score: req.body.score}, () => {
        Results.find({game_type: req.body.game_type}).lean().exec(function (err, documents) {
            console.log("Found results: %s", documents);
            res.json(documents)
        })
    })
});

router.get("/getCPSScores", function(req, res, next) {
    console.log("Getting scores for CPS: %s", req.body)
    Results.getTopResultsForGame("cps", 10).exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })
})

router.get("/GetReactionScores", function(req, res, next) {
    console.log("Getting scores for Reaction: %s", req.body)
    Results.getTopResultsForTimeGame("reaction", 10).exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })
})

router.get("/GetAccuracyScores", function(req, res, next) {
    console.log("Getting scores for Accuracy: %s", req.body)
    Results.getTopResultsForTimeGame("accuracy", 10).exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })
})

router.get("/GetAimScores", function(req, res, next) {
    console.log("Getting scores for Accuracy: %s", req.body)
    Results.getTopResultsForTimeGame("aimtraining", 10).exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })
})

router.get("/GetUsers", function(req, res, next) {
    console.log("Getting Users: %s", req.body)
    Users.find({ }).exec(function(err, documents) {
        console.log("Found Users: %s", documents)
        res.json(documents)
    })
})

router.post("/getPersonalCPSScores", function(req, res, next) {
    console.log("Getting scores for CPS: %s", req.body)
    Results.getSpecificGameResultsForUserId(req.body.owner_id, "cps").exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })
})

router.post("/GetPersonalReactionScores", function(req, res, next) {
    console.log("Getting scores for Reaction: %s", req.body)
    Results.getSpecificGameResultsForUserId(req.body.owner_id, "reaction").exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })
})

router.post("/GetPersonalAccuracyScores", function(req, res, next) {
    console.log("Getting scores for Accuracy: %s", req.body)
    Results.getSpecificGameResultsForUserId(req.body.owner_id, "accuracy").exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })
})

router.post("/GetPersonalAimScores", function(req, res, next) {
    console.log("Getting scores for Accuracy: %s", req.body)
    Results.getSpecificGameResultsForUserId(req.body.owner_id, "aimtraining").exec(function(err, documents) {
        console.log("Found scores: %s", documents)
        res.json(documents)
    })
})

module.exports = router;