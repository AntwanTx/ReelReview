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


// Aaron...This is what I found for Creating, Updating, and Deleting Movie Reviews. Not sure how correct it is. Please take a look. 


// const express = require('express');
// const mongoose = require('mongoose');

// // CREATE A ROUTER FOR MOVIE REVIEWS
// const reviewRouter = express.Router();

// // DEFINE THE MOVIE REVIEW SCHEMA
// const reviewSchema = new mongoose.Schema({
//   movieId: String,
//   review: String
// });

// // CREATE A MONGOOSE MODEL BASED ON THE REVIEW SCHEMA
// const MovieReview = mongoose.model('MovieReview', reviewSchema);

// // CONNECT TO YOUR MONGODB DATABASE
// mongoose.connect('mongodb://localhost:27017/moviereviews', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.error('Error connecting to MongoDB:', error));

// // DEFINE THE ROUTES FOR MOVIE REVIEWS
// reviewRouter.get('/:id', (req, res) => {
//   const movieId = req.params.id;

//   // RETRIEVE ALL MOVIE REVIEWS FOR A SPECIFIC MOVIE
//   MovieReview.find({ movieId })
//     .then(reviews => res.json(reviews))
//     .catch(error => res.status(500).json({ error }));
// });

// reviewRouter.post('/:id', (req, res) => {
//   const movieId = req.params.id;
//   const { review } = req.body;

//   // CREATE A NEW MOVIE REVIEW AND SAVE IT TO MONGODB
//   const newReview = new MovieReview({ movieId, review });
//   newReview.save()
//     .then(() => res.send('New review created successfully'))
//     .catch(error => res.status(500).json({ error }));
// });

// reviewRouter.put('/:id/:reviewId', (req, res) => {
//   const movieId = req.params.id;
//   const reviewId = req.params.reviewId;
//   const { review } = req.body;

//   // UPDATE THE SPECIFIED MOVIE REVIEW IN MONGODB
//   MovieReview.findOneAndUpdate({ _id: reviewId, movieId }, { review })
//     .then(() => res.send(`Review with ID ${reviewId} updated successfully`))
//     .catch(error => res.status(500).json({ error }));
// });

// reviewRouter.delete('/:id/:reviewId', (req, res) => {
//   const movieId = req.params.id;
//   const reviewId = req.params.reviewId;

//   // DELETE THE SPECIFIED MOVIE REVIEW IN MONGODB
//   MovieReview.findOneAndDelete({ _id: reviewId, movieId })
//     .then(() => res.send(`Review with ID ${reviewId} deleted successfully`))
//     .catch(error => res.status(500).json({ error }));
// });

// MOUNT THE MOVIE REVIEWS ROUTER AS A SUB-ROUTER UNDER THE MAIN MOVIE ROUTER
// movieRoutes.use('/movies', reviewRouter);