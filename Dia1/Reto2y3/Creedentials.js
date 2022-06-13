const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({
    address: String,
    phone: String,
    email: String
});
module.exports = mongoose.model("Creedentials", CreedentialsSchema, "Creedentials");