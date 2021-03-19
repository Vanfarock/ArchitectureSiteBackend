const express = require('express');
const router = express.Router();

const imageController = require('../Controllers/imageController');

router.get('/', imageController.image_list)
router.get('/:imageId', imageController.image_detail)

module.exports = router;
