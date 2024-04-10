const mongoose = require('mongoose')

const teamModel = new mongoose.Schema(
    {
        id: {
            type : String
        },
        team: {
            type: String
        }
    }
)

const ModelTeams = mongoose.model('teams', teamModel)

module.exports = ModelTeams