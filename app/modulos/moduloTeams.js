const dbService = require('../services/dbService')


async function post(req) {

    const body = req.body
    const response = await dbService.postTeam(body) 
    
    return {

        action: 'post',
        idHeroe: response.id,
        teamHeroe: response.team
        
    }
 
}

async function patch(req) {
    
    const {id, team} = req.body
    const response = await dbService.patchTeam(id, team)
    
    return {

        action: 'patch',
        prevTeam: response.team,
        newTeam: team
    
    }
}


module.exports = {
    
    post,
    patch

}