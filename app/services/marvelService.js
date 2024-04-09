const axios = require('axios');
const config = require('../config/env.json');
let {Heroe} = require('../classes/heroe');
const ModelTeams = require('../classes/teamSchema');

async function getHeroes(offset = 0, searchString = '') {
  const url = `${config.ApiUrl}characters?ts=1&apikey=${config.ApiKey}&hash=${config.ApiHash}&limit=20&offset=${offset}${searchString ? `&nameStartsWith=${searchString}`: ''}`;

  try {
    const response = await axios.get(url);
    const teams = await ModelTeams.find().exec()
    const total = response.data.data.total;
    let arrayHeroe = [];
    response.data.data.results.forEach( heroe => {
      let team = '';
      teams.forEach( heroeWithTeam => {
        if( heroe.id == heroeWithTeam.id){
          team = heroeWithTeam.team
          console.log(team);
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
    return { total, arrayHeroe};
  } catch (error) {
    throw new Error(`Error fetching Marvel heroes: ${error.message}`);
  }
}

module.exports = { getHeroes };