// ---------------------------------------------------
// MODEL SETUP - Product
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// 2) Creating Schema for Model (blueprint)
const ProductSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0.01, "Price must be at least 0.01 dollars"],
        max: [1000000, "Price must be at most 1million dollars"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be at least 10 characters long"],
    }
},
{
    timestamps: true,
}
);

// 4) Apply the uniqueValidator plugin to userSchema.
ProductSchema.plugin(uniqueValidator);

// 5) Creating Model using Schema
const ProductModel = mongoose.model("Product", ProductSchema);

// 6) Exporting Model
module.exports = ProductModel;