let mongoose = require("mongoose");
let User = require("./esquema");

mongoose.connect('mongodb+srv://ManuelPiris:Aitana2022@cluster0.nhgjdoj.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false});

 
async function usuario(firstName,lastName,marks){
    let usuario = new User({
        firstName:firstName,
        lastName:lastName,
        marks:marks
    })
    try{
        let guardar = await usuario.save()
        console.log('Correctamente subido')
        console.log(guardar)
    }
    catch(error)
    {console.log(error)}
}


// usuario(
//     "Alberto","Marron",[{
//         date:2022-05-05,mark:5,subjects:{title:"html",teacher:
//             [{firstName:"Ana", lastName:"Menchu"}]}}]);

// usuario(
//     "Marta","Verde",[{
//         date:2020-01-01,mark:8,subjects:{title:"javascript",teacher:
//             [{firstName:"Marta", lastName:"Fernandez"}]}}]);

// usuario(
//     "Maria","Amarillo",[{
//         date:2020-10-05,mark:6,subjects:{title:"mongodb",teacher:
//             [{firstName:"Jose", lastName:"Herrera"}]}}]);

// usuario(
//     "Laura","loranca",[{
//         date:2019-10-10,mark:4,subjects:{title:"python",teacher:
//             [{firstName:"Marta", lastName:"Fernandez"}]}}]); 
            
//busquedas

//punto1

// async function notas(firstName){
//     try{
//         let nota=await User.find({firstName:firstName},{_id:0,marks:1});
//         console.log("Notas:")
//         for(let i in nota){
//             console.log(nota[i].marks[0].mark)
//          }}
//         catch (err){
//          console.log(err)
//     }
// }
// notas("Alberto")
// notas("Marta")
// notas("Maria")
// notas("Laura")

//punto2

// async function asignaturas(firstName){
//     try{
//         let asig=await User.find({firstName:firstName},{_id:0,marks:1});
//         console.log("Asignaturas del Alumno:")
//         for(let i in asig){
//             console.log(asig[i].marks[0].subjects.title)
//          }}
//         catch (err){
//         console.log(err)
//     }
// }
// asignaturas("Alberto")
// asignaturas("Marta")
// asignaturas("Maria")
// asignaturas("Laura")

//punto3

// async function asignaturas(firstName){
//     try{
//         let asig=await User.find({firstName:firstName},{_id:0,marks:1});
//         console.log("Profesores del Alumno:")
//         for(let i in asig){
//             console.log(asig[i].marks[0].subjects.teacher[0].firstName)//.firstName
//          }}
//         catch (err){
//         console.log(err)
//     }
// }
// asignaturas("Alberto")
// asignaturas("Marta")
// asignaturas("Maria")
// asignaturas("Laura")