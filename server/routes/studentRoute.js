const express = require('express');
const router = express.Router();
const {createStudent,getStudent,updateStatus,deleteStudent} = require('../controller/studentController');

//route to get all students
router.get('/',getStudent)

//route to create a new student
router.post('/create', createStudent);

//route to update status of a student
router.put('/update/:id', updateStatus);

//route to delete student
router.delete('/delete/:id',deleteStudent)

module.exports = router;