const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const teamController = require('../controllers/teamsController');

router.get('/marvel', apiController);

router.post('/team', teamController.postTeam);

router.patch('/team', teamController.patchTeam);


module.exports = router;