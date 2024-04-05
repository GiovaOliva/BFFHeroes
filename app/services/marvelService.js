const axios = require('axios');
const config = require('../config/env.json');
let {Heroe} = require('../classes/heroe');

async function getHeroes(offset = 0, searchString = '') {
  const url = `${config.ApiUrl}characters?ts=1&apikey=${config.ApiKey}&hash=${config.ApiHash}&limit=20&offset=${offset}${searchString ? `&nameStartsWith=${searchString}`: ''}`;

  try {
    const response = await axios.get(url);
    const total = response.data.data.total;
    let arrayHeroe = [];
        response.data.data.results.forEach( heroe => {
            let hero = new Heroe(
                heroe.id,
                heroe.name,
                heroe.description,
                heroe.modified,
                heroe.thumbnail.path,
                heroe.thumbnail.extension,
                heroe.resourceURI
            )
            arrayHeroe.push(hero)
        });
    return { total, arrayHeroe };
  } catch (error) {
    throw new Error(`Error fetching Marvel heroes: ${error.message}`);
  }
}

module.exports = { getHeroes };