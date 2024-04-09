const mongoose = require('mongoose');

const dbconnect = async () => {
  try {
    const connection = await mongoose.connect('mongodb://localhost:27017/HeroesTeams'); 
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application on error
  }
};


module.exports = dbconnect;