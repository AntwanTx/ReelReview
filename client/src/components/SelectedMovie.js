import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import "../App.css";

function SelectedMovie() {
  const [selectedMoviePicture, setSelectedMoviePicture] = useState(null);
  const [reviews, setReviews] = useState([]);

  const movieList = [
    // Define your movie list with their respective picture URLs
    { title: "AMRICAN PSYCHO", pictureUrl: "ReelReview/client/movie-posters/american-psycho.jpg" },
    { title: "AVENGERS", pictureUrl: "ReelReview/client/movie-posters/avengers.jpg" },
    { title: "BARBIE", pictureUrl: "ReelReview/client/movie-posters/barbie.jpg" },
    { title: "BATMAN: THE DARK KNIGHT", pictureUrl: "ReelReview/client/movie-posters/batman.jpg" },
    { title: "KNIVES OUT", pictureUrl: "ReelReview/client/movie-posters/knives-out.jpg" },
    { title: "PARASITE", pictureUrl: "ReelReview/client/movie-posters/parasite.jpg" },
    { title: "SPIDERMAN: NOE WAY HOME", pictureUrl: "ReelReview/client/movie-posters/spiderman.jpg" },
    { title: "STARWARS: A NEW HOPE", pictureUrl: "ReelReview/client/movie-posters/starwars.jpg" },
    // Add more movies as needed
  ];

  const handleSubmitReview = (review) => {
    setReviews([...reviews, review]);
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  const handleMovieSelect = (moviePictureUrl) => {
    setSelectedMoviePicture(moviePictureUrl);
  };

  return (
    <div className="App">
      <ReviewForm
        onSubmit={handleSubmitReview}
        selectedMoviePicture={selectedMoviePicture}
        movieList={movieList}
      />
       <ReviewList reviews={reviews} onDeleteReview={handleDeleteReview} onSelectMovie={handleMovieSelect} />
    </div>
  );
}

export default SelectedMovie;
