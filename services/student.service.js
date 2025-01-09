const Student = require('../models/student.model');

// Create a new student
exports.createStudent = (newStudent, result) => {
    Student.create(newStudent, (err, data) => {
        if (err) {
            result(err, null);
        } else {
            result(null, data);
        }
    });
};

// Get a student by ID with marks
// exports.getStudentByIdWithMarks = (id, result) => {
//     Student.findByIdWithMarks(id, (err, data) => {
//         if (err) {
//             result(err, null);
//         } else {
//             result(null, data);
//         }
//     });
// };

// Get all students
exports.getAllStudents = (result) => {
    Student.getAll((err, data) => {
        if (err) {
            result(err, null);
        } else {
            result(null, data);
        }
    });
};

// Update a student by ID
exports.updateStudentById = (id, student, result) => {
    Student.updateById(id, student, (err, data) => {
        if (err) {
            result(err, null);
        } else {
            result(null, data);
        }
    });
};

// Delete a student by ID
exports.deleteStudentById = (id, result) => {
    Student.remove(id, (err, data) => {
        if (err) {
            result(err, null);
        } else {
            result(null, data);
        }
    });
};

// Paginated students with total count
exports.getAllStudentsWithPagination = async (page = 1, limit = 10, result) => {
    const offset = (page - 1) * limit;

    try {
        // Get total count of students
        const count = await new Promise((resolve, reject) => {
            Student.getTotalCount((err, count) => {
                if (err) reject(err);
                resolve(count);
            });
        });

        // Get paginated students
        const students = await new Promise((resolve, reject) => {
            Student.getPaginatedStudents(offset, limit, (err, students) => {
                if (err) reject(err);
                resolve(students);
            });
        });

        const totalPages = Math.ceil(count / limit);
        const pagination = {
            total: count,
            page: page,
            limit: limit,
            totalPages: totalPages
        };

        result(null, { pagination, students });
    } catch (err) {
        result(err, null);
    }
};
