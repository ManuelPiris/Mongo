let mongoose = require("mongoose");
let Photos = require("./photos");

mongoose.connect('mongodb+srv://ManuelPiris:Aitana2022@cluster0.nhgjdoj.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false});

function checkRespuesta(err,res){
if(err){
    console.log("Error: " + err);
}else{
    console.log("Datos Guardados.");
    console.log(res);
    }
};

// let PhotoSDocument = new Photos({
//                 user: "Alberto",
//                 url: "https://www.google.com/search?q=pasion+fotos&rlz=1C1ONGR_esES1008ES1008&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjapMG26Kz4AhUQ_KQKHV8TC98Q_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=hWI6tCiSJPeysM",
//                 titule: "La pasion",
//                 description: "Foto sobre la pasion entre hombrse y mujeres",
// });

// PhotoSDocument.save(checkRespuesta)


// let PhotoSDocument2 = new Photos({
//     user: "Paco",
//     url: "https://www.google.com/search?q=murte+en+pena&tbm=isch&ved=2ahUKEwidr8KH66z4AhXO4YUKHaxPDtAQ2-cCegQIABAA&oq=murte+en+pena&gs_lcp=CgNpbWcQAzoECAAQQzoFCAAQgAQ6BggAEB4QBzoICAAQsQMQgwE6CwgAEIAEELEDEIMBOgQIABADOggIABCABBCxAzoGCAAQHhAFOgYIABAeEAg6BggAEAoQGFDWBFjDHWDdHmgFcAB4AIABfogBqQmSAQQxNC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=p3CoYt2_Ac7DlwSsn7mADQ&bih=722&biw=1536&rlz=1C1ONGR_esES1008ES1008#imgrc=rDjMMUQVsMuV1M",
//     titule: "Muerte en Pena",
//     description: "Imagen literal de la muerte en la pena de la carcel",
// });

// PhotoSDocument2.save(checkRespuesta)


// let PhotoSDocument3 = new Photos({
//     user: "Jacinto",
//     url: "https://www.google.com/search?q=correr&tbm=isch&ved=2ahUKEwien5TZ66z4AhUUjxoKHTIfCrQQ2-cCegQIABAA&oq=correr&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAgAELEDEIMBOgsIABCABBCxAxCDAToECAAQQzoECAAQA1CtBViSC2CqDGgAcAB4AIABnAGIAekEkgEDNi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=UnGoYp6uDpSearK-qKAL&bih=722&biw=1536&rlz=1C1ONGR_esES1008ES1008#imgrc=54-60LhaorxGuM",
//     titule: "Running",
//     description: "Correr para liberarte del dia a dia",
// });

// PhotoSDocument3.save(checkRespuesta)

 
//reto 1-1
// let PhotoSDocument4 = ({
//     user: "Andres",
//     url: "https://www.google.com/search?q=la+lloreria&tbm=isch&ved=2ahUKEwjBq4S36Kz4AhUNghoKHbb_ArEQ2-cCegQIABAA&oq=la+lloreria&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgQIABAYMgQIABAYMgQIABAYMgQIABAYMgQIABAYOgYIABAeEAc6BggAEB4QCDoECAAQQzoICAAQgAQQsQM6CAgAELEDEIMBOgQIABADOgcIABCxAxBDOgsIABCABBCxAxCDAVDNBljvEGDKEWgAcAB4AIABcYgBogiSAQM4LjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=5W2oYoGlFo2Earb_i4gL&bih=722&biw=1536&rlz=1C1ONGR_esES1008ES1008#imgrc=_gI9NEyCrSYjkM",
//     titule: "A la Lloreria",
//     description: "Como me encuentro actualmente",  
// });

// let document = new Photos(PhotoSDocument4);

// document.save()
// .then(function(res)
// {
//     console.log("Documento guardado correctamente."); 
//     console.log(res) 
//     mongoose.disconnect();
// })
// .catch(function(){console.log("Error al escribir el documento.")})

//reto 1-2
// Photos.find({user: "Alberto"}, 
// function(err, Photos)
// {
// if (err)
//     console.log("Error");
// else{
//     console.log(Photos)
// }});

//reto 1-3
// Photos.updateOne({titule : "A la Lloreria"},{description:"Como me encuentro modificado"},checkRespuesta);

// reto 1-4

// Photos.deleteOne({"$and":[{user :"Andres"},{titule:"A la Lloreria"}]})
//     .then(function(items)
//     {
//         console.log("Correctamente Borrado");
//         console.log(items);
//         mongoose.disconnect();
        
//     })
//     .catch(function()
//     {
//         console.log("Error")
//     })

// Photos.deleteOne({user: "Andres", titule: "A la Lloreria"}, checkRespuesta);

// //reto 1-5

// Photos.deleteMany({"$and":[{user :"Andres"}]})
//     .then(function(items)
//     {
//         console.log("Correctamente Borrado");
//         console.log(items);
//         mongoose.disconnect();
        
//     })
//     .catch(function()
//     {
//         console.log("Error")
//     })

// Photos.deleteMany({user: "Andres", }, checkRespuesta);