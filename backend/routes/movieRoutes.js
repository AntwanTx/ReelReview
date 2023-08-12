const express = require('express');
const router = express.Router();
const Movie = require('../models/movieModel');

// Fetch all movies hey just a test
router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
