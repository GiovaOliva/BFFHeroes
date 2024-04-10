const axios = require('axios');
const config = require('../config/env.json');
const ModelTeams = require('../classes/teamSchema');

async function getHeroes(offset = 0, searchString = '') {
  
  const url = `${config.ApiUrl}characters?ts=1&apikey=${config.ApiKey}&hash=${config.ApiHash}&limit=20&offset=${offset}${searchString ? `&nameStartsWith=${searchString}`: ''}`;

  try {

    const marvelResponse = await axios.get(url);
    const dbResponse = await ModelTeams.find().exec()
    
    return { marvelResponse, dbResponse };

  } catch (error) {
    
    throw new Error(`Error al hacer peticiones: ${error.message}`);
  
  }
}

module.exports = { getHeroes };