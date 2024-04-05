const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/marvel', apiController.getHeroes);

module.exports = router;