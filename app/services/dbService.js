const ModelTeams = require('../classes/teamSchema');


async function postTeam(body){
    try {

        const team = await ModelTeams.create(body)
        
        return team

    } catch(err) {
        
        console.log('Error creando registro, error: ' + err)
    
    }
}

async function patchTeam(id, team){
    try {
        
        const update = await ModelTeams.findOneAndUpdate({id}, {team})
        
        return update

    } catch(err) {
        
        console.log('Error actualizando registro, error: ' + err)
    
    }
}

module.exports = {
    postTeam,
    patchTeam
}