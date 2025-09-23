const express = require('express');
const router = express.Router();
const {createStudent,getStudent,updateStatus,deleteStudent, getStudentById} = require('../controller/studentController');
const {isLogged} = require("../middleware/isLogged");

//route to get all students
router.get('/',isLogged,getStudent)

//Route to get a student by id
router.get('/:id',isLogged,getStudentById);

//route to create a new student
router.post('/create',isLogged,createStudent);

//route to update status of a student
router.put('/update/:id',isLogged,updateStatus);

//route to delete student
router.delete('/delete/:id',isLogged,deleteStudent)

module.exports = router;