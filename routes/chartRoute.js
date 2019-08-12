const express = require('express');
const router = express.Router();
const controller = require('../src/controllers/chartController')
router.post('/', controller.drawChart);
module.exports = router;