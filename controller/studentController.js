const Student = require("../models/students");

exports.createStudent = async (req, res) => {
    try {
        const { fullName, stack, gender, centre, email } = req.body;
        const student = await Student.create({ fullName, stack, gender, centre, email });
        res.status(201).json({ message: `Student created successfully`, data: student })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

exports.getAStudent = async (req, res) => {
    try {
        const { id } = req.params
        const student = await Student.findByPk(id)
        res.status(200).json({
            message: "Student below",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
};

exports.getAllStudent = async (req, res) => {
    try {
        // const {fullName, email, stack, gender, centre} = req.body
        const student = await Student.findAll()
        res.status(200).json({
            message: `All students found and their total is ${student.length}`,
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
};

exports.updateAStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const { fullName, stack, gender, centre, email } = req.body;
        const student = await Student.findByPk(id);
        if (!student) {
            res.status(404).json({
                message: 'Student not found'
            })
        } else {
            const updateStudent = await Student.update({fullName, stack, gender, centre, email}, {where: {id}});
            res.status(200).json({
                message: 'Student updated successfully'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

exports.deleteStudent = async (req, res) => {
    try{
        const id = req.params.id;
        const deleted = await Student.destroy({where: {id}});
        res.status(200).json({
            message: 'Student deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};