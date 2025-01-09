const marksService = require('../services/marks.service');

// Create a new mark
exports.createMark = (req, res) => {
    const newMark = {
        student_id: req.body.student_id,
        subject: req.body.subject,
        marks: req.body.marks,
        exam_date: req.body.exam_date,
    };

    marksService.createMark(newMark, (err, data) => {
        if (err) res.status(500).send({ message: 'Error creating mark' });
        else res.send(data);
    });
};

// Get all marks
exports.getAllMarks = (req, res) => {
    marksService.getAllMarks((err, data) => {
        if (err) res.status(500).send({ message: 'Error retrieving marks' });
        else res.send(data);
    });
};

// Get a mark by ID
exports.getMarkById = (req, res) => {
    marksService.getMarkById(req.params.id, (err, data) => {
        if (err) res.status(500).send({ message: 'Error retrieving mark' });
        else res.send(data);
    });
};

// Update a mark by ID
exports.updateMark = (req, res) => {
    const mark = {
        student_id: req.body.student_id,
        subject: req.body.subject,
        marks: req.body.marks,
        exam_date: req.body.exam_date,
    };

    marksService.updateMarkById(req.params.id, mark, (err, data) => {
        if (err) res.status(500).send({ message: 'Error updating mark' });
        else res.send(data);
    });
};

// Delete a mark by ID
exports.deleteMark = (req, res) => {
    marksService.deleteMarkById(req.params.id, (err, data) => {
        if (err) res.status(500).send({ message: 'Error deleting mark' });
        else res.send({ message: 'Mark deleted successfully' });
    });
};
