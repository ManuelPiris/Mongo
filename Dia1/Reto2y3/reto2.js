//variables y funciones de las diapositivas del dia de hoy de Jose

let mongoose = require("mongoose");
let User = require("./User");
let Creedentials = require("./Creedentials");
let Profile = require("./Profile");

mongoose.connect('mongodb+srv://ManuelPiris:Aitana2022@cluster0.nhgjdoj.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false});

let userDocument = new User({
    login : "Aitana",
    password : "25022022",
});     

userDocument.save(checkRespuesta)
function checkRespuesta(err,res){
    if(err){
        console.log("Error: " + err);
    }else{
        console.log("Datos User Guardados.");
        console.log(res)
     }
};

let creedentialsDocument = new Creedentials({
    address : "Calle Almonte 6",
    phone : "600000000",
    email : "aitana@gmail.com",
});

creedentialsDocument.save(checkRespuesta)
function checkRespuesta(err,res){
if(err){
    console.log("Error: " + err);
}else{
    console.log("Datos Creedentials Guardados.");
    console.log(res);
    }
};

let profileDocument = new Profile({
    name : "Aitana",
    surname : "Loranca",
    dateofBirth : "2022/05/25",
    Comments : "Adicta a la leche materna",
    rol : "Bebe",
});

profileDocument.save(checkRespuesta)
function checkRespuesta(err,res){
    if(err){
        console.log("Error: " + err);
    }else{
        console.log("Datos Profile Guardados.");
        console.log(res);
     }
};


