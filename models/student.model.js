const connection = require('../config/db');

const Student = {};

// Create a new student
Student.create = (newStudent, result) => {
    connection.query('INSERT INTO Students SET ?', newStudent, (err, res) => {
        if (err) {
            console.error('Error creating student:', err);
            result(err, null);
            return;
        }
        result(null, { StudentID: res.insertId, ...newStudent });
    });
};

// Get all students
Student.getAll = (result) => {
    connection.query('SELECT * FROM Students', (err, res) => {
        if (err) {
            console.error('Error retrieving students:', err);
            result(err, null);
            return;
        }
        result(null, res);  // Return result to callback
    });
};

// Get total count of students
Student.getTotalCount = (result) => {
    connection.query('SELECT COUNT(*) AS total FROM Students', (err, res) => {
        if (err) {
            console.error('Error retrieving total count:', err);
            result(err, null);
            return;
        }
        result(null, res[0].total);
    });
};

// Get paginated students
Student.getPaginatedStudents = (offset, limit, result) => {
    // Calculating offset for SQL query
    const offsetValue = (offset - 1) * limit;  // Adjusting offset based on page number (1-based index)

    connection.query(
        'SELECT * FROM Students LIMIT ?, ?',  // Query to get paginated students
        [offsetValue, limit],  // Passing offset and limit to the query
        (err, res) => {
            if (err) {
                console.error('Error retrieving paginated students:', err);
                result(err, null);
                return;
            }
            result(null, res);  // Return result to callback
        }
    );
};

// Update a student by ID
Student.updateById = (id, student, result) => {
    connection.query(
        'UPDATE Students SET first_name = ?, last_name = ?, email = ?, dob = ? WHERE id = ?',
        [student.first_name, student.last_name, student.email, student.dob, id],
        (err, res) => {
            if (err) {
                console.error('Error updating student:', err);
                result(err, null);
                return;
            }
            result(null, { StudentID: id, ...student });
        }
    );
};

// Delete a student by ID
Student.remove = (id, result) => {
    connection.query('DELETE FROM Students WHERE id = ?', [id], (err, res) => {
        if (err) {
            console.error('Error deleting student:', err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Student;
