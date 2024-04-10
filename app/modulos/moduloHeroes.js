const { getHeroes } = require('../services/marvelService')
let { Heroe } = require('../classes/heroe');

async function setHeroesData(req){

    const {offset, searchString} = req.query
    const {marvelResponse, dbResponse} = await getHeroes(offset, searchString)
    const total = marvelResponse.data.data.total;
    let arrayHeroe = [];
    marvelResponse.data.data.results.forEach( heroe => {
      let team = '';
      dbResponse.forEach( heroeWithTeam => {
        if( heroe.id == heroeWithTeam.id){
          team = heroeWithTeam.team
        }
      })      
      let hero = new Heroe(
        heroe.id,
        heroe.name,
        heroe.description,
        heroe.modified,
        heroe.thumbnail.path,
        heroe.thumbnail.extension,
        heroe.resourceURI,
        heroe.teamColor = team
      )
      arrayHeroe.push(hero)
    });

    return {arrayHeroe, total}

}

module.exports = { setHeroesData }