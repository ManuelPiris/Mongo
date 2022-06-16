//variables y funciones de las diapositivas del dia de hoy de Jose

let mongoose = require("mongoose");
let User = require("./esquema");

mongoose.connect('mongodb+srv://ManuelPiris:Aitana2022@cluster0.nhgjdoj.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false});

//ME LO HA EXPLICADO ALVARO
let date1 = new Date("2022-01-01")
let date2 = new Date("2022-06-06")
let date3 = new Date("2021-05-05")
let date4 = new Date("2020-01-05")
let date5 = new Date("2019-01-01")  

async function usuario(date,mark,student_first_name,student_last_name,
                       group_name,subject_name,teacher){
    let usuario = new User({
        date:date,
        mark:mark,
        student_first_name:student_first_name,
        student_last_name:student_last_name,
        group_name:group_name,
        subject_name:subject_name,
        teacher:teacher
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
//     date1,8,"Antonio","Maquina","grupo1","html",[{
//         teacher_first_name:"Roberto",teacher_last_name:"Leal"},
//         {teacher_first_name:"Mariola",teacher_last_name:"Fernandez"}]);

// usuario(
//     date3,5,"Marta","Perales","grupo2","javascript",[{
//         teacher_first_name:"Marta",teacher_last_name:"Fernandez"}]);

// usuario(
//     date1,9,"Maria","Mundo","grupo3","python",[{
//         teacher_first_name:"Pablo",teacher_last_name:"Peluca"}]);

// usuario(
//     date2,10,"Laura","Loranca","grupo4","html",[{
//         teacher_first_name:"Roberto",teacher_last_name:"Leal"}]);

// usuario(
//     date2,5,"Manuel","Piris","grupo5","mongodb",[{
//         teacher_first_name:"David",teacher_last_name:"Civera"},
//         {teacher_first_name:"Martina",teacher_last_name:"Olivera"}]);

// usuario(
//     date4,7,"Antonia","Rio","grupo1","html",[{
//         teacher_first_name:"Roberto",teacher_last_name:"Leal"},
//         {teacher_first_name:"Mariola",teacher_last_name:"Fernandez"}]);
        
// usuario(
//     date4,9,"Mario","Fernandez","grupo2","javascript",[{
//         teacher_first_name:"Marta",teacher_last_name:"Fernandez"}]);
        
// usuario(
//     date1,6,"Kevyn","Sinlux","grupo6","typescript",[{
//         teacher_first_name:"Pedro",teacher_last_name:"Abascal"}]);
        
// usuario(
//     date3,7,"Lautaro","Mercadona","grupo5","mongodb",[{
//          teacher_first_name:"David",teacher_last_name:"Civera"},
//          {teacher_first_name:"Martina",teacher_last_name:"Olivera"}]);
        
// usuario(
//     date5,4,"David","Bustamante","grupo6","typescript",[{
//         teacher_first_name:"Pedro",teacher_last_name:"Abascal"}]);

//retos
//1

// User.aggregate([{$match:{subject_name:"typescript"}},
//                    {$group:{_id:"$subject_name","Media":{"$avg":"$mark"}}}])
        
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//2

// User.aggregate([{$count: "student_first_name"}])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//3

// User.aggregate([{$project: {_id:0,"student_first_name": "$student_first_name", 
//                             "student_last_name": "$student_last_name" }}])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//4

// User.aggregate([{$project:{_id:0,"teacher_first_name":"$teacher.teacher_first_name",
//                           "teacher_last_name":"$teacher.teacher_last_name"}}])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//5

// User.aggregate([{$group:{"_id":{"group_name":"$group_name"},
//                 "Total":{"$sum":1}}},
//                 {$sort:{"Total":-1}}])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//6

// User.aggregate([{$group:{_id:"$subject_name","Media":{"$avg":"$mark"}}},
//                 {$match:{"Media":{"$gt":5}}},
//                 {$sort:{"Media":-1}},
//                 {$limit:5}])
            
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//7

// User.aggregate([{$unwind:"$teacher"},{$group:{_id:{"subject_name":"$subject_name"},
//                 "Total":{"$sum":1}}}])
            
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//8

// OTRA OPCION VALDRIA ASI?? NO ES OPTIMO USAR 2 MATCH          
// User.aggregate([{$match: {"date": {"$lt": new Date("2021-12-31")}}},
//                 {$match:{mark:{"$gt":8}}},
//                 {$group:{_id:{"AlNombre":"$student_first_name","AlApellido":"$student_last_name","Nota":"$mark"}}},
// ])

///////////////////////////////

// User.aggregate([{$match:{"$or":[{mark:{"$gt":8}}, {date:{"$lt": new Date('2022,01,01')}}]}},
//                 {$group:{_id:{"AlNombre":"$student_first_name","AlApellido":"$student_last_name","Nota":"$mark"}}},

//             ])



// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//9

// User.aggregate([{$match:{date:{"$gt": new Date('2021,01,01')}}},
//                 {$group:{_id:"$subject_name","Nota":{"$avg":"$mark"}}}
// ])


// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//10

// User.aggregate([{$match:{date:{"$gt": new Date('2021,01,01')}}},
//                 {$group:{_id:"$student_first_name","Nota":{"$avg":"$mark"}}}
// ])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//11

// User.aggregate([{$unwind:"$teacher"},
//                 {$match: {"teacher.teacher_first_name": "Pedro","teacher.teacher_last_name": "Abascal"}},
//                 {$group:{_id:{NombreAl:"$student_first_name"},
//                  "Numero":{"$sum":1} }}
                    
// ])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })
