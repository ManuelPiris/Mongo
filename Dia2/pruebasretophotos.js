let mongoose = require("mongoose");
let Photos = require("./photos");

mongoose.connect('mongodb+srv://ManuelPiris:Aitana2022@cluster0.nhgjdoj.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false});


//reto 1-1
// let PhotoSDocument = ({
//         user: "Andres",
//         url: "https://www.google.com/search?q=la+lloreria&tbm=isch&ved=2ahUKEwjBq4S36Kz4AhUNghoKHbb_ArEQ2-cCegQIABAA&oq=la+lloreria&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgQIABAYMgQIABAYMgQIABAYMgQIABAYMgQIABAYOgYIABAeEAc6BggAEB4QCDoECAAQQzoICAAQgAQQsQM6CAgAELEDEIMBOgQIABADOgcIABCxAxBDOgsIABCABBCxAxCDAVDNBljvEGDKEWgAcAB4AIABcYgBogiSAQM4LjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=5W2oYoGlFo2Earb_i4gL&bih=722&biw=1536&rlz=1C1ONGR_esES1008ES1008#imgrc=_gI9NEyCrSYjkM",
//         titule: "A la Lloreria",
//         description: "Como me encuentro actualmente",  
// });

// let document = new Photos(PhotoSDocument);

// document.save()
//     .then(function(res)
//     {
//         console.log("Documento guardado correctamente."); 
//         console.log(res) 
//         mongoose.disconnect();
//     })
//     .catch(function(){console.log("Error al escribir el documento.")})

//reto 1-2
Photos.find({user: "Alberto"}, 
function(err, Photos)
{
if (err)
    console.log("Error");
else{
// console.log(Photos[0].user)
   console.log(Photos[0].url)
}});

//reto 1-3
// function checkRespuesta(err, res) 
// {
// if (err) 
//     console.log("Error: " + err)
// else{
//     console.log("Metodo realizado correctamente")
//     console.log(Photos);
//     mongoose.disconnect();
// }};

// Photos.updateMany({titule : "A la Lloreria", description:"Como me encuentro actualmente"}, {description:"Como me encuentro modificado"},checkRespuesta);

//reto 1-4

// Photos.deleteOne({user: "Andres", titule: "A la Lloreria"} checkRespuesta);

//reto1-5

// Photos.deleteMany({user: "Andres", } checkRespuesta);