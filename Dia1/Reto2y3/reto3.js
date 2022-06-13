//variables y funciones de las diapositivas del dia de hoy de Jose

let mongoose = require("mongoose");
let Profile = require("./validation");

mongoose.connect('mongodb+srv://ManuelPiris:Aitana2022@cluster0.nhgjdoj.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false});


let profileDocument = new Profile({
        name : "Manuela",
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