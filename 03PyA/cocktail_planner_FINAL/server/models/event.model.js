// ---------------------------------------------------
9// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const EventsSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre es obligatorio"],
        minlength: [2, "Nombre necesita al menos 2 letras"],
    },
    fecha: {
        type: Date,
        required: [true, "Fecha es obligatoria"],
    },
    invitados: {
        type: Number,
        required: [true, "Numero de invitados es obligatorio"],
        min: [1, "Al menos 1 persona"]
    },
    drinks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Drinks",
        }
    ]
}, {
    timestamps: true
});

// 3) Creating Model using Schema
const EventModel = mongoose.model("Events", EventsSchema);

// 4) Exporting Model
module.exports = EventModel;