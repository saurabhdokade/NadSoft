const express = require('express');
const router = express.Router();
const marksController = require('../controllers/marks.controller');

// Route to create a new mark
router.post('/marks', marksController.createMark);

// Route to get all marks
router.get('/marks', marksController.getAllMarks);

// Route to get a mark by its ID
router.get('/marks/:id', marksController.getMarkById);

// Route to update a mark by its ID
router.put('/marks/:id', marksController.updateMark);

// Route to delete a mark by its ID
router.delete('/marks/:id', marksController.deleteMark);

module.exports = router;
