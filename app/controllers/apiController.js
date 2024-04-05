const marvelService = require('../services/marvelService');

exports.getHeroes = async (req, res) => {
  try {
    const { offset, searchString } = req.query;
    const heroes = await marvelService.getHeroes(offset, searchString);
    res.json(heroes);
  } catch (error) {
    console.error('Error fetching Marvel characters:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};