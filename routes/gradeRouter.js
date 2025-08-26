const express = require('express');
const { createStudentGrade } = require('../controller/gradeController');


const router = express.Router();

router.post('/grades', createStudentGrade);




module.exports = router;