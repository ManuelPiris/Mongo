const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    user: String,
    url: String,
    titule: String,
    description: String,
})

module.exports = mongoose.model("Photo", PhotoSchema, "Photo");