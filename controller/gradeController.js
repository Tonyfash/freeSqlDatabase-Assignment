const Student_grade = require("../models/grade");
const Student = require("../models/students");

exports.createStudentGrade = async (req, res) => {
    try {
        const id = req.params.id;
        const {week, punctuality, assignment, classwork, personal_defence, attendance, studentId} = req.body;
        const total = punctuality + assignment + classwork + personal_defence + attendance;
        const studentGrades = await Student_grade.create({
            week,
            punctuality,
            assignment,
            classwork,
            personal_defence,
            attendance,
            studentId,
            total
        });
        res.status(201).json({
            message: "Student's grade created",
            data: studentGrades
        })
    } catch(error) {
        res.status(500).json({
            messsage: error.message
        })
    }
}