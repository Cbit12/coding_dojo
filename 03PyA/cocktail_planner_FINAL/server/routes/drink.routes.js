// ---------------------------------------------------
// ROUTES SETUP - Drink
// ---------------------------------------------------

// 1) Importing External Libraries
const express = require("express");

// 2) Importing authenticate function for restricting requests
const { authenticate } = require("../config/jwt.config");

// 3) Importing Controller
const {
    getAllDrinks,
    getOneDrink,
    createNewDrink,
    updateOneDrinkById,
    deleteOneDrinkById,
} = require("../controllers/drink.controller");

// 4) Create Router Instance
const DrinkRouter = express.Router();

// 4) Link Routes with Controller Methods
DrinkRouter.get("/", getAllDrinks);
DrinkRouter.get("/:id/", getOneDrink);
DrinkRouter.post("/new/", createNewDrink);
DrinkRouter.put("/:id/", updateOneDrinkById);
DrinkRouter.delete("/:id/", deleteOneDrinkById);

// 4) Exporting Router
module.exports = DrinkRouter;