// ---------------------------------------------------
// CONTROLLER SETUP - Product
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const ProductModel = require("../models/product.model");

// 3) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
findAllProducts: (req, res) => {
    ProductModel.find({})
    .then((allProducts) => res.status(200).json(allProducts))
    .catch((err) => res.status(500).json({ message: "Something went wrong", error: err }));
},
findOneProductById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });
    ProductModel.findOne({ _id: req.params.id })
    .then((oneSingleProduct) => {
        if (oneSingleProduct) {
        res.status(200).json(oneSingleProduct);
        } else {
        res.status(404).json({ message: "Product not found" });
        }
    })
    .catch((err) => res.status(500).json({ message: "Something went wrong", error: err }));
},
  // 2.2) CREATE METHODS
createNewProduct: (req, res) => {
    ProductModel.create(req.body)
    .then((newlyCreatedProduct) => res.status(201).json(newlyCreatedProduct))
    .catch((err) => {
        if (err.name === "ValidationError") {
        return res
            .status(400)
            .json({ message: "Validation Errors", errors: err });
        }
        res.status(500).json({ message: "Something went wrong", errors: err });
    });
},
};