const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  // other fields...
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
