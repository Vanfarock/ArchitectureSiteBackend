const express = require('express');
const router = express.Router();

const projectController = require('../Controllers/projectController');

router.get('/', projectController.project_list)
router.get('/:projectId', projectController.project_detail)

module.exports = router;
