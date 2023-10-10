// ---------------------------------------------------
// MODEL SETUP - Drink
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const DrinksSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    photo: {
        type: String,
    }
}
, {
    timestamps: true
});

// 3) Creating Model using Schema
const Drinkmodel = mongoose.model("Drinks", DrinksSchema);

// 4) Exporting Model
module.exports = Drinkmodel;