const { setHeroesData } = require('../modulos/moduloHeroes');

const getHeroes = async (req, res) => {
  try {
    const heroes = await setHeroesData(req);
    res.status(200).json(heroes);
  } catch (error) {
    console.error('Error fetching Marvel characters:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = getHeroes;