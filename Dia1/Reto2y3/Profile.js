const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateofBirth : String,
    Comments : String,
    rol : String
});
module.exports = mongoose.model("Profile", ProfileSchema, "Profile");