// ---------------------------------------------------
// MODEL SETUP - JOKE
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const JokeSchema = new mongoose.Schema({
    id: String,
    setup: String,
    punchline: String
}, {
    timestamps: true
});

// 3) Creating Model using Schema
const JokeModel = mongoose.model("Joke", JokeSchema);

// 4) Exporting Model
module.exports = JokeModel;