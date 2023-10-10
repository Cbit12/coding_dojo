// ---------------------------------------------------
// CONTROLLER SETUP - Drink
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const Drinkmodel = require("../models/drink.model");

// 3) Exporting Controller functions
module.exports = {
    // 3.1) READ METHODS
    getAllDrinks : (req, res) => {
        Drinkmodel.find({})
            .then((alldrinks) =>
                res.status(200).json(alldrinks))
            .catch((err) => {
                res.status(500).json({message: "Something went wrong", errors: err})
            })
    },

    getOneDrink : (req, res) => {
        let id = req.params.id
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "UUID doesn't match the specified format"});
        Drinkmodel.findOne({_id: id})
            .then((onedrink) =>{
                if (onedrink) {
                    res.status(200).json(onedrink);
                } else {
                    res.status(404).json({message: "Data not found"});
                }
            })
            .catch((err) => 
                res.status(500).json({message: "Something went wrong", errors: err})
            );
    },

    // 3.2) CREATE METHODS
    createNewDrink : (req, res) => {
        let data = req.body;

        Drinkmodel.create(data)
            .then((newDrink) =>
                res.status(201).json(newDrink)
            )
            .catch((err) => {
                if (err.name === "ValidationError") {
                    return res.status(400).json({ message: "Validation Errors", errors: err });
                }
                res.status(500).json({ message: "Something went wrong", errors: err });
            })
    },

    // 3.3) UPDATE METHODS
    updateOneDrinkById : (req, res) => {
        if (!ObjectId.isValid(req.params.id))
        return res.status(400).json({ message: "UUID doesn't match the specified format" });

    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };

    Drinkmodel.findOneAndUpdate({ _id: req.params.id }, req.body, updateOptions)
        .then((updatedDrink) => {
            if (updatedDrink) {
                res.status(200).json(updatedDrink);
            } else {
                res.status(404).json({ message: "Data not found" });
            }
        })
        .catch((err) => {
        if (err.name === "ValidationError") {
            return res.status(400).json({ message: "Validation Errors", errors: err });
        }
        res.status(500).json({ message: "Something went wrong", errors: err });
        });
    },

    // 3.4) DELETE METHODS
    deleteOneDrinkById: (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).json({ message: "UUID doesn't match the specified format" });
        Drinkmodel.deleteOne({ _id: req.params.id })
            .then((result) => {
            if (result.deletedCount === 0) {
                res.status(404).json({ message: "Data not found" });
            } else {
                res.status(200).json({ messages: "Data deleted", result: result });
            }
        })
            .catch((err) =>
            res.status(500).json({ message: "Something went wrong", errors: err })
            );
    },
};

