const express = require('express');
const router = express.Router();

const imageController = require('../Controllers/imageController');

router.get('/', imageController.imageList)
router.get('/:imageId', imageController.imageDetail)
router.post('/create', imageController.createImage)

module.exports = router;
