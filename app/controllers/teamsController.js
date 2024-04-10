
const moduloTeams = require('../modulos/moduloTeams')

const postTeam = async (req, res) =>{
    try{
        const response = await moduloTeams.post(req)
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({
            mensaje:'Peticion fallida',
            error: err
        })
    }
}

const patchTeam = async (req, res) =>{
    try{
        const response = await moduloTeams.patch(req)
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({
            mensaje: 'peticion fallida',
            error: err
        });
    }
}


module.exports = {
    postTeam,
    patchTeam

}