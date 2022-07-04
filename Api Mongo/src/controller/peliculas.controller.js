// let mongoose = require("mongoose");
const { response } = require("express");
const Peliculas=require("../model/peliculas")
const connection = require("../database");
const peliculas = require("../model/peliculas");

//GET

function getPeliculas(req,res){
    if(req.query._id)
    {
        console.log(req.query._id)
        Peliculas.findById(req.query._id)
        
        .then((user) =>
        {
            console.log(user);
            res.json(user)
        })
        .catch((error) =>
        {
            console.log(error);
            throw error
        }) 
    }else{
        Peliculas.find({})
        .then((user) =>
        {
            console.log(user);
            res.json(user)
        })
        .catch((error) =>
        {
           throw error
    })
}
};

async function getActoresFromPeliculaId(req,res){
    if(req.query._id != null){
        try{
            let SearchA = await Peliculas.findById(req.query._id);
            console.log("Película OK")
            console.log(SearchA.actorMovie)
            res.send(SearchA.actorMovie)
        }
        catch (err){
            console.log(err)
            process.exit(-1);
        }
    }else{
        console.log("Id no valido")
    }
}

async function getGuionistasFromPeliculaId(req,res){
    if(req.query._id != null){
        try {
            let SearchW = await Peliculas.findById(req.query._id);
            console.log("Película OK")
            console.log(SearchW.screenwriter)
            res.send(SearchW.screenwriter)
        }
        catch (err){
            console.log(err)
            process.exit(-1);
        }
    }else{
        console.log("Id no valido")
    }
}

async function getDirectorsFromPeliculaId(req, res){
    if (req.query._id != null) {
        try {
            let SearchD = await Peliculas.findById(req.query._id);
            console.log("Película OK")
            console.log(SearchD.director)
            res.send(SearchD.director)
        }
        catch (err){
            console.log(err)
            process.exit(-1);
        }
    }else{
        console.log("Id no valido")
    }
}
async function getProducterFromPeliculaId(req,res){
    if (req.query._id != null) {
        try {
            let SearchP = await Peliculas.findById(req.query._id);
            console.log("Película OK")
            console.log(SearchP.producter)
            // res.send(SearchP.producter)
            let respuesta={error:false ,mensaje:"Productor encontrado",producter:SearchP.producter}
            res.send(respuesta)
                
        }
        catch (err){
            console.log(err)
            process.exit(-1);
        }
    }else{
        console.log("Id no valido")
    }
}
//POST

async function postPeliculas(req,res) {
    let pelicula = new Peliculas({
        nameMovie: req.body.nameMovie,
        actorMovie: [],
        screenwriter: [],
        director: [],
        producter: req.body.producter,
        year: req.body.year
    })
    try {
        let Update = await pelicula.save();
        console.log("Película OK")
        res.send(Update)
    }
    catch(err) {
        console.log(err);

}}

async function postPeliculaActor(req,res){
    try {
        let ActorM = await Peliculas.updateOne({ "_id": req.query._id }, { $push:{actorMovie:req.body.actorMovie}});
        console.log("Actor actualizado")
        res.send(ActorM)
    }
    catch (err) {
        console.log(err);
}}

async function postPeliculaDirector(req,res){
    try {
        let DirectorM = await Peliculas.updateOne({ "_id": req.query._id }, { $push:{director:req.body.director}});
        console.log("Director actualizado")
        res.send(DirectorM)
    }
    catch (err) {
        console.log(err);
}}

async function postPeliculaGuionista(req,res){
    try {
        let GuionistaM = await Peliculas.updateOne({ "_id": req.query._id }, { $push:{screenwriter:req.body.screenwriter}});
        console.log("Guinosita actualizado")
        res.send(GuionistaM)
    }
    catch (err) {
        console.log(err);
}}

//PUT

function putPeliculas(req,res){
    let _id = req.body._id
    if(_id){
        Peliculas.updateOne({_id:_id},{
            nameMovie:req.body.nameMovie,
            actorMovie:req.body.actorMovie,
            screenwriter:req.body.screenwriter,
            director:req.body.director,
            producter:req.body.producter,
            year:req.body.year
        })
        .then(()=>{
            res.json("Datos actualizados");
        })
        .catch((error)=>{
            console.log(error)
            res.json("Datos incorrectos,no modificado")
        }) 
    }else{
        res.send("Datos incorrectos,no modificado")
    }
}

//DELETE

async function deletePeliculas(req,res){
    if(req.query._id != null){
        try {
            let Delete = await Peliculas.deleteOne({ _id: req.query._id });
            console.log("Película eliminada")
            res.send(Delete)
        }
        catch(err){
            console.log(err);
        }
        }else{
        console.log("ID no valido")
    }
}

async function deletePeliculasActor(req,res){
    if(req.query._id != null){
        try{
            let quitarActor = await Peliculas.updateOne({_id:req.body._id},{ $pull: {actorMovie:req.body.actorMovie}})
            console.log('Actor Borrado')
            res.send(quitarActor)
        }
        catch (error){
            console.log(error)
        }
        }else{
        console.log("ID no valido")
    }
}

async function deletePeliculasDirector(req,res){
    if(req.query._id != null){
        try{
            let quitarDirector = await Peliculas.updateOne({_id:req.body._id},{ $pull: {director:req.body.director}})
            console.log('Director Borrado')
            res.send(quitarDirector)
        }
        catch (error){
            console.log(error)
        }
        }else{
        console.log("ID no valido")
    }
}

async function deletePeliculasGuionista(req,res){
    if(req.query._id != null){
        try{
            let quitarGuionista = await Peliculas.updateOne({_id:req.body._id},{ $pull: {screenwriter:req.body.screenwriter}})
            console.log('Guionista Borrado')
            res.send(quitarGuionista)
        }
        catch (error){
            console.log(error)
        }
        }else{
        console.log("ID no valido")
    }
}

module.exports = {
                getPeliculas,getActoresFromPeliculaId,getDirectorsFromPeliculaId,getGuionistasFromPeliculaId,getProducterFromPeliculaId,
                postPeliculas,postPeliculaActor,postPeliculaDirector,postPeliculaGuionista,
                putPeliculas,
                deletePeliculas,deletePeliculasActor,deletePeliculasDirector,deletePeliculasGuionista}


// {
//     "nameMovie":"TopGun",
//     "actorMovie":"Tom Cruise,Val Kilmer,Miles Teller",
//     "screenwriter":"Ehren Kruger, Peter Craig, Ashley Miller",
//     "director": "Tony Scott, Ridley Scott",
//     "year": 1986
// }
