const Student = require('../models/student.model'); // Import the Student model

// Create a new student
exports.create = (req, res) => {
    const newStudent = req.body;

    if (!newStudent.first_name || !newStudent.last_name || !newStudent.email) {
        return res.status(400).send({ message: "Required fields: first_name, last_name, email." });
    }

    Student.create(newStudent, (err, student) => {
        if (err) {
            return res.status(500).send({ message: err.message || "Some error occurred while creating the student." });
        }
        res.status(201).send({ message: "Student created successfully!", student });
    });
};

// // Get a student by ID with marks
// exports.findByIdWithMarks = (req, res) => {
//     const studentId = req.params.id;

//     Student.findByIdWithMarks(studentId, (err, student) => {
//         if (err) {
//             return res.status(500).send({ message: err.message || "Error retrieving student data." });
//         }
//         if (!student || student.length === 0) {
//             return res.status(404).send({ message: "Student not found." });
//         }
//         res.status(200).send(student);
//     });
// };

// Get total count of students
exports.getTotalCount = (req, res) => {
    Student.getTotalCount((err, count) => {
        if (err) {
            return res.status(500).send({ message: err.message || "Error retrieving total count of students." });
        }
        res.status(200).send({ totalCount: count });
    });
};

// Get all students
exports.getAllStudents = (req, res) => {
    Student.getAll((err, students) => {
        if (err) {
            return res.status(500).send({ message: err.message || "Error retrieving students." });
        }
        res.status(200).send(students);  // Return all students to the client
    });
};

// Get paginated students
exports.getPaginatedStudents = (req, res) => {
    const offset = parseInt(req.query.offset) || 1;  // Default to page 1 if no offset is provided
    const limit = parseInt(req.query.limit) || 100;  // Default to 10 students per page if no limit is provided

    Student.getPaginatedStudents(offset, limit, (err, students) => {
        if (err) {
            return res.status(500).send({ message: err.message || "Error retrieving students." });
        }
        res.status(200).send(students);  // Return students to the client
    });
};

// Update a student by ID
exports.updateById = (req, res) => {
    const studentId = req.params.id;
    const updatedStudent = req.body;

    Student.updateById(studentId, updatedStudent, (err, student) => {
        if (err) {
            return res.status(500).send({ message: err.message || "Error updating student." });
        }
        res.status(200).send({ message: "Student updated successfully!", student });
    });
};

// Delete a student by ID
exports.remove = (req, res) => {
    const studentId = req.params.id;

    Student.remove(studentId, (err, response) => {
        if (err) {
            return res.status(500).send({ message: err.message || "Error deleting student." });
        }
        if (response.affectedRows === 0) {
            return res.status(404).send({ message: "Student not found." });
        }
        res.status(200).send({ message: "Student deleted successfully." });
    });
};
