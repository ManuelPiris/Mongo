const {Schema, model} = require("mongoose");

const ProfesionalSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    genre: String,
    isRetired: Boolean,
})


module.exports = model("Profesionales", ProfesionalSchema, "Profesionales");