import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// this is a way to add mongo so i can use it for the movie app


// const express = require('express');
// const cors = require('cors');
// const app = express();
// const mongoose = require('mongoose');
// const movieRoutes = require('./routes/movieRoutes');

// // middleware
// app.use(cors()); 
// app.use(express.json());
// app.use(movieRoutes);

// // connect to mongoDB
// mongoose.connect('mongodb://localhost:27017/moviesdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Mongodb connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// })

// // start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// })

// this is the end of that code i just added

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








//Aaron...This is what I found for Creating, Updating, and Deleting Movie Reviews. Not sure how correct it is. Please take a look. 


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
