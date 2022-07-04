// let mongoose = require("mongoose");
const { response } = require("express");
const Profesionales=require("../model/profesionales")
const connection = require("../database");

//GET

async function getProfesionales(req,res) {
    if (req.query._id == null) {
        try {
            let Mostrar = await Profesionales.find({});
            console.log("Profesionales");
            res.send(Mostrar);
            
        }
        catch (err) {
            console.log(err);
            // process.exit(-1);
        }
    }else{
        try{
            let Mostrar = await Profesionales.findById(req.query._id);
            console.log("Profesional")
            res.send(Mostrar)
        }
        catch (err){
            console.log(err)
            // process.exit(-1);
}}}


// function getProfesionales(req,res){
//     if(req.params._id){
//         Profesionales.findById(req.params._id)
//         .then((user) =>
//         {
//             res.send(user)
//         })
//         .catch((error) =>
//         {
//             console.log("Id no valida");
//             res.json([error, "id no valida"])
//         })
//     }else{
//        Profesionales.find({})
//         .then((user) =>
//         {
//             console.log(user);
//             res.json(user)
//         })
//         .catch((error) =>
//         {
//             console.log(error);
//             console.log("Id no introducida");
//             res.json([error, "id no valida"])
//             process.exit(-1);
//     })
// }};

//POST

async function postProfesionales(req,res) {
    let profesional = new Profesionales({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        genre: req.body.genre,
        isRetired: req.body.isRetired 
    })
    try {
        let Upload = await profesional.save();
        console.log("El profesional se ha subido con exito")
        res.send(Upload)
    }
    catch (err) {
        console.log(err);

    }
}

// function postProfesionales(req,res){
//     let profesional = new Profesionales({
//        name:req.body.name,
//        surname:req.body.surname,
//        age:req.body.age,
//        genre:req.body.genre,
//        isRetired:req.body.isRetired
//     })
//     profesional.save()
//     .then((user)=>{
//         console.log("Datos Subidos");
//         res.send(user);
//     })
//     .catch((error)=>{
//         console.log(error)
//         res.send(error)
//     }) 
// };

async function putProfesionales(req,res) {
    if (req.query._id != null) {
        try {
            let Update = await Profesionales.updateOne({_id:req.query._id},
                {name: req.body.name, surname: req.body.surname, age: req.body.age,
                genre: req.body.genre, isRetired:req.body.isRetired});
            console.log("Profesional actualizado")
            res.send(Update)
        }
        catch (err) {
            console.log(err);
        }
    }else{
        console.log("Profesional incorrecto")
}}

// //PUT

// function putProfesionales(req,res){
//     Profesionales.updateOne({_id:req.body._id},{
//         name:req.body.name,
//         surname:req.body.surname,
//         age:req.body.age,
//         genre:req.body.genre,
//         isRetired:req.body.isRetired
//         })
//         .then((user)=>{
//             console.log("Datos Actualizados");
//             res.json("Datos actualizados");
//             res.send(user);
//         })
//         .catch((error)=>{
//             console.log(error)
//             res.json("Datos incorrectos,no modificado")
//         }) 
// }

//DELETE

async function deleteProfesionales(req, res) {
    if (req.query._id != null) {
        try {
            let Delet = await Profesionales.deleteOne({_id:req.query._id});
            console.log("Profesional eliminado")
            res.send(Delet)
        }
        catch (err) {
            console.log(err);
        }
    }else{
     console.log("ID invalido")
}}

// function deleteProfesionales(req,res){

//     Profesionales.deleteOne({_id:req.body._id})
//             .then((user)=>{
//                 console.log("Todos los datos del usuario borrados");
//                 res.json("Todos los datos del usuario borrados");
//                 res.send(user);
//             })
//             .catch(()=>{
//                 res.json("Fallo al borrar,usuario necesario para borrar")
//             })     
// };

module.exports = {getProfesionales,postProfesionales, putProfesionales,deleteProfesionales}

// {
//     "name": "Antonio",
//     "surname": "Pajares",
//     "age": 81,
//     "genre": "hombre",
//     "isRetired": true
// }