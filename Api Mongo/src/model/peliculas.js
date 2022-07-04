const {Schema, model} = require("mongoose");

const PeliculasSchema = new Schema({
    nameMovie: String,
    actorMovie: [String],
    screenwriter: [String],
    director: [String],
    producter: String,
    year: Number,
})

module.exports = model("Peliculas", PeliculasSchema, "Peliculas");