const express = require('express');
const router = express.Router();
const controller = require('./students-controller');

router.get('/', controller.getAllStudents);
router.get('/v2', controller.getAllStudentsWithGraduateInfo);
router.post('/create', controller.createStudent);

module.exports = router;