// ---------------------------------------------------
// CONTROLLER SETUP - JOKE
// ---------------------------------------------------

// 1) Importing Model
const JokeModel = require("../models/jokes.model");

// 2) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
    findAllJokes: (req, res) => {
        JokeModel.find()
            .then((allJokes) => res.json({ jokes: allJokes }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    findOneJokeById: (req, res) => {
        JokeModel.findOne({ _id: req.params.id })
            .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
  // 2.2) CREATE METHODS
    createNewJoke: (req, res) => {
        JokeModel.create(req.body)
            .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
  // 2.3) UPDATE METHODS
    updateExistingJoke: (req, res) => {
        JokeModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // { new: true } -> returns updated document instead of original
            .then((updatedJoke) => res.json({ joke: updatedJoke }))
            .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
            );
    },
  // 2.4) DELETE METHODS
    deleteAnExistingJoke: (req, res) => {
        JokeModel.deleteOne({ _id: req.params.id })
            .then((result) => res.json({ result: result }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
};