// ---------------------------------------------------
// MODEL SETUP - Beverage
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const BeverageSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    drinks: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: "Drinks",}
    ]
}, {
    timestamps: true
});

// 3) Creating Model using Schema
const Beveragemodel = mongoose.model("Beverages", BeverageSchema);

// 4) Exporting Model
module.exports = Beveragemodel;