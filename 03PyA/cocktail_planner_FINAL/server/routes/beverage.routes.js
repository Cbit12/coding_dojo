// ---------------------------------------------------
// ROUTES SETUP - Beverage
// ---------------------------------------------------

// 1) Importing External Libraries
const express = require("express");

// 2) Importing authenticate function for restricting requests
const { authenticate } = require("../config/jwt.config");

// 3) Importing Controller
const {
    getAllBeverages,
    getOneBeverage,
    createNewBeverage,
    updateOneBeverageById,
    deleteOneBeverageById,
} = require("../controllers/beverage.controller");

// 4) Create Router Instance
const BeverageRouter = express.Router();

// 4) Link Routes with Controller Methods
BeverageRouter.get("/", getAllBeverages);
BeverageRouter.get("/:id/", getOneBeverage);
BeverageRouter.post("/new/", createNewBeverage);
BeverageRouter.put("/:id/", updateOneBeverageById);
BeverageRouter.delete("/:id/", deleteOneBeverageById);

// 4) Exporting Router
module.exports = BeverageRouter;