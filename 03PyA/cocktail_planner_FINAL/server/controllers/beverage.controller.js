// ---------------------------------------------------
// CONTROLLER SETUP - Beverage
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const Beveragemodel = require("../models/beverage.model");

// 3) Exporting Controller functions
module.exports = {
    // 3.1) READ METHODS
    getAllBeverages : (req, res) => {
        Beveragemodel.find({}).populate("drinks")
            .then((allbeverages) =>
                res.status(200).json(allbeverages))
            .catch((err) => {
                res.status(500).json({message: "Something went wrong", errors: err})
            })
    },

    getOneBeverage : (req, res) => {
        let id = req.params.id
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "UUID doesn't match the specified format"});
        Beveragemodel.findOne({_id: id}).populate("drinks")
            .then((onebeverage) =>{
                if (onebeverage) {
                    res.status(200).json(onebeverage);
                } else {
                    res.status(404).json({message: "Data not found"});
                }
            })
            .catch((err) => 
                res.status(500).json({message: "Something went wrong", errors: err})
            );
    },

    // 3.2) CREATE METHODS
    createNewBeverage : (req, res) => {
        let data = req.body;

        Beveragemodel.create(data)
            .then((newBeverage) =>
                res.status(201).json(newBeverage)
            )
            .catch((err) => {
                if (err.name === "ValidationError") {
                    return res.status(400).json({ message: "Validation Errors", errors: err });
                }
                res.status(500).json({ message: "Something went wrong", errors: err });
            })
    },

    // 3.3) UPDATE METHODS
    updateOneBeverageById : (req, res) => {
        if (!ObjectId.isValid(req.params.id))
        return res.status(400).json({ message: "UUID doesn't match the specified format" });

    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };

    Beveragemodel.findOneAndUpdate({ _id: req.params.id }, req.body, updateOptions)
        .then((updatedBeverage) => {
            if (updatedBeverage) {
                res.status(200).json(updatedBeverage);
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
    deleteOneBeverageById: (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).json({ message: "UUID doesn't match the specified format" });
        Beveragemodel.deleteOne({ _id: req.params.id })
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

