const express = require('express');
const router = express.Router();
const controller = require('./graduates-controller');

router.get('/', controller.getAllGraduates);
router.get('/v2', controller.getAllGraduatesWithStudentInfo);
router.get('/v3', controller.getAllGraduatesWithProgramData);

module.exports = router;