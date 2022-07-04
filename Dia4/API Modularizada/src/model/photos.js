const {Schema, model} = require("mongoose");

const PhotoSchema = new Schema({
    user: String,
    url: String,
    titule: String,
    description: String,
})

module.exports = model("Photo2", PhotoSchema, "Photo2");