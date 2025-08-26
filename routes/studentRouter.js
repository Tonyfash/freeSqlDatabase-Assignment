const express = require('express');
const { createStudent, getAStudent, getAllStudent, updateAStudent, deleteStudent } = require("../controller/studentController");


const router = express.Router();

router.post('/student', createStudent);
router.get('/student/:id', getAStudent);
router.get('/student', getAllStudent);
router.put('/student/:id', updateAStudent);
router.delete('/student/:id', deleteStudent);

module.exports = router;
