// ---------------------------------------------------
// ROUTES SETUP - Products
// ---------------------------------------------------

// 1) Importing Controller Methods and Express Third-party Library
const {
    findAllProducts,
    findOneProductById,
    createNewProduct,
} = require("../controller/product.controller");

const express = require("express");

  // 2) Create Router Instance
const ProductRouter = express.Router();

  // 3) Link Routes with Controller Methods
ProductRouter.get("/", findAllProducts);
ProductRouter.get("/:id", findOneProductById);
ProductRouter.post("/", createNewProduct);

  // 4) Exporting Router
module.exports = ProductRouter;