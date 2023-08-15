import React, { useState } from "react";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import "../App.css";

function SelectedMovie() {
  const [selectedMoviePicture, setSelectedMoviePicture] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleSubmitReview = (review) => {
    setReviews([...reviews, review]);
  };

  const handleMovieSelect = (moviePictureUrl) => {
    setSelectedMoviePicture(moviePictureUrl);
  };

  return (
    <div className="App">
      <ReviewForm
        onSubmit={handleSubmitReview}
        selectedMoviePicture={selectedMoviePicture}
      />
      <ReviewList reviews={reviews} onSelectMovie={handleMovieSelect} />
    </div>
  );
}

export default SelectedMovie;
