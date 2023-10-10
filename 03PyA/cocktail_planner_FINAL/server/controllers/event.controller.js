// ---------------------------------------------------
// CONTROLLER SETUP - Event
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const EventModel = require("../models/event.model");

// 3) Exporting Controller functions
module.exports = {
    // 3.1) READ METHODS
    getAllEvents : (req, res) => {
        EventModel.find({}).populate("drinks")
            .then((allevents) =>
                res.status(200).json(allevents))
            .catch((err) => {
                res.status(500).json({message: "Something went wrong", errors: err})
            })
    },

    getOneEvent : (req, res) => {
        let id = req.params.id
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "UUID doesn't match the specified format"});
        EventModel.findOne({_id: id}).populate("drinks")
            .then((oneevent) =>{
                if (oneevent) {
                    res.status(200).json(oneevent);
                } else {
                    res.status(404).json({message: "Data not found"});
                }
            })
            .catch((err) => 
                res.status(500).json({message: "Something went wrong", errors: err})
            );
    },

    // 3.2) CREATE METHODS
    createNewEvent : (req, res) => {
        let data = req.body;

        EventModel.create(data)
            .then((newEvent) =>
                res.status(201).json(newEvent)
            )
            .catch((err) => {
                if (err.name === "ValidationError") {
                    return res.status(400).json({ message: "Validation Errors", errors: err });
                }
                res.status(500).json({ message: "Something went wrong", errors: err });
            })
    },

    // 3.3) UPDATE METHODS
    updateOneEventById : (req, res) => {
        if (!ObjectId.isValid(req.params.id))
        return res.status(400).json({ message: "UUID doesn't match the specified format" });

    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };

    console.log(req.body);

    EventModel.findOneAndUpdate({ _id: req.params.id }, req.body, updateOptions).populate("drinks")
        .then((updatedEvent) => {
            if (updatedEvent) {
                console.log(updatedEvent)
                res.status(200).json(updatedEvent);
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
    deleteOneEventById: (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).json({ message: "UUID doesn't match the specified format" });
        EventModel.deleteOne({ _id: req.params.id })
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

