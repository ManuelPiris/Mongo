const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    
});


const SubjectsSchema = new mongoose.Schema({
    title: String,
    teacher: [TeacherSchema],
    
});

const MarksSchema = new mongoose.Schema({
    date : Date,
    mark: Number,
    subjects: SubjectsSchema,
 
});


const StudentsSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    marks: [MarksSchema]
 
});

//SE RELACIONAN TODOS A TRAVES DE STUDENTS

module.exports = mongoose.model("Students", StudentsSchema, "Students");