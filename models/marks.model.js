const connection = require('../config/db');

const Marks = {};

// Create a new mark
Marks.create = (newMark, result) => {
    connection.query('INSERT INTO Marks SET ?', newMark, (err, res) => {
        if (err) {
            console.error('Error creating mark:', err);
            result(err, null);
            return;
        }
        result(null, { MarkID: res.insertId, ...newMark });
    });
};

// Find a mark by ID
Marks.findById = (id, result) => {
    connection.query('SELECT * FROM Marks WHERE id = ?', [id], (err, res) => {
        if (err) {
            console.error('Error finding mark:', err);
            result(err, null);
            return;
        }
        result(null, res[0]);
    });
};

// Get all marks
Marks.getAll = (result) => {
    connection.query('SELECT * FROM Marks', (err, res) => {
        if (err) {
            console.error('Error retrieving marks:', err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Update a mark by ID
Marks.updateById = (id, mark, result) => {
    connection.query(
        'UPDATE Marks SET student_id = ?, subject = ?, marks = ?, exam_date = ? WHERE id = ?',
        [mark.student_id, mark.subject, mark.marks, mark.exam_date, id],
        (err, res) => {
            if (err) {
                console.error('Error updating mark:', err);
                result(err, null);
                return;
            }
            result(null, { MarkID: id, ...mark });
        }
    );
};

// Delete a mark by ID
Marks.remove = (id, result) => {
    connection.query('DELETE FROM Marks WHERE id = ?', [id], (err, res) => {
        if (err) {
            console.error('Error deleting mark:', err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Marks;
