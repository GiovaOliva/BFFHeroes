const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const ModelTeams = require('../classes/teamSchema');

router.get('/marvel', apiController.getHeroes);

router.post('/team',async (req, res) => {
    console.log(req.body);
    const team = await ModelTeams.create(req.body)
    res.json({
        status: 'success',
        cod: 200,
        action: 'post',
        team: team
    })
});

router.patch('/team', async (req, res) => {
    console.log(req.body);
    const {id, team} = req.body;
    const update = await ModelTeams.findOneAndUpdate({id}, {team})
    res.json({
        status: 'success',
        cod: 200,
        action: 'patch',
        PrevTeam: update.team,
        NewTeam: team
    })
})


module.exports = router;