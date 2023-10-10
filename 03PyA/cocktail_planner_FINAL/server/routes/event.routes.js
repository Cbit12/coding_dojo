// ---------------------------------------------------
// ROUTES SETUP - Event
// ---------------------------------------------------

// 1) Importing External Libraries
const express = require("express");

// 2) Importing authenticate function for restricting requests
const { authenticate } = require("../config/jwt.config");

// 3) Importing Controller
const {
    getAllEvents,
    getOneEvent,
    createNewEvent,
    updateOneEventById,
    deleteOneEventById,
} = require("../controllers/event.controller");

// 4) Create Router Instance
const EventRouter = express.Router();

// 4) Link Routes with Controller Methods
EventRouter.get("/", getAllEvents);
EventRouter.get("/:id/", getOneEvent);
EventRouter.post("/new/", createNewEvent);
EventRouter.put("/:id/", updateOneEventById);
EventRouter.delete("/:id/", deleteOneEventById);

// 4) Exporting Router
module.exports = EventRouter;