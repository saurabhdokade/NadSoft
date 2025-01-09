const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// Route to create a new student
router.post('/students', studentController.create);

// Route to get all students
router.get('/students', studentController.getTotalCount);

// Route to get a student by ID with marks
// router.get('/students/:id', studentController.findByIdWithMarks);
// Route to get all students
router.get('/students/all', studentController.getAllStudents);

// Route to get paginated list of students
router.get('/students/paginated', studentController.getPaginatedStudents);

// Route to update a student by ID
router.put('/students/:id', studentController.updateById);

// Route to delete a student by ID
router.delete('/students/:id', studentController.remove);

module.exports = router;
