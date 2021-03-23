const express = require('express');
const router = express.Router();

const projectController = require('../Controllers/projectController');

router.get('/', projectController.projectList)
router.get('/:projectId', projectController.projectDetail)

module.exports = router;
