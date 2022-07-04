// let mongoose = require("mongoose");
const { response } = require("express");
const Photos2=require("../model/photos")
const connection = require("../database")

//GET
function getPhotos(req,res){
    if(req.query.id == null)
    {
        Photos2.find({})
        .then((user) =>
        {
            console.log(user);
            res.send(user)
        })
        .catch((error) =>
        {
            console.log(error);
            process.exit(-1);
        })
    
}else{

        Photos2.findById(req.query.id)
        .then((user) =>
        {
        console.log(user);
        res.send(user)
        })
        .catch((error) =>
        {
        console.log(error);
        process.exit(-1);
    })
}};

//POST
function postPhotos(req,res){
     let photo = new Photos2({
        user:req.body.user,
        url:req.body.url,
        titule:req.body.titule,
        description:req.body.description
     })
     photo.save()
        .then((user) =>
        {
            console.log(user);
            res.send(user)
        })
        .catch((error) =>
            console.log(error)
)};


//PUT

function putPhotos(req,res){
    if(req.body.titule != null && req.body.description != null){
        Photos2.updateMany({description:req.body.description})
        .then((user)=>{
            console.log("Datos Actualizados");
            res.send(user);
        })
        .catch(()=>{
            res.send("Dato incorrecto,no mdificado")
        }) 
        // }else{ res.send("Dato incorrecto,no mdificado")}}        
}};

//DEL CON USER Y TITULO

function deletePhoto(req,res){
    if(req.body.user != null && req.body.titule != null){
    Photos2.deleteOne({user:req.body.user,titule:req.body.titule})
        .then((user)=>{
            console.log("Datos Borrados de este usuario");
            res.send(user);
        })
        .catch(()=>{
            res.send("Fallo al borrar,datos necesarios mal insertados")
        })     
}};

//DEL TODO CON USUARIO

function deletePhotos(req,res){
    if(req.body.user != null){
    Photos2.deleteMany({user:req.body.user})
        .then((user)=>{
            console.log("Todos las entradas del usuario borradas");
            res.send(user);
        })
        .catch(()=>{
            res.send("Fallo al borrar,usuario necesario para borrar")
        })     
}};


module.exports = {getPhotos,postPhotos,putPhotos,deletePhoto,deletePhotos}