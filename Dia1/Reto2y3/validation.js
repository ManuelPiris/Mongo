let mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: {
            type: String,
            enum: ["Manuela","Pepa","Alex"]
    },

    surname: String,

    dateofBirth: {
                    type: String,
                    validate: [
                        function(dateofBirth){
                            return dateofBirth >= "1990/01/01";
                        },
                        'La fecha nacimiento esta mal puesta'],
                        select:false},

    Comments: {
                type: String,
                required:false
    },


    rol: {
            type: String,
            required:true

    },

});

ProfileSchema.pre('save', function(next){
    console.log("Middleware de entrada");
    if(this.rol.length > 4){
        console.log("Has introducido mas de 4 palabaras")
        next();
    }else
    console.log("Tienes que introducir mas de 4 palabaras")
});

module.exports = mongoose.model("Profile", ProfileSchema, "Profile");