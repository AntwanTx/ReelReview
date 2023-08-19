import React, { useEffect, useState } from 'react';

const ReviewList = ({ reviews, onDeleteReview, onUpdateReview}) => {

  const movieList = [
    // Define your movie list with their respective picture URLs
    { title: "American Psycho", pictureUrl: "https://images.justwatch.com/poster/284907871/s592/american-psycho-1" },
    { title: "The Avengers", pictureUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" },
    { title: "Barbie", pictureUrl: "https://www.themoviedb.org/t/p/original/i7QrCnwzdp6NyyAPPtJloKZmbBH.jpg" },
    { title: "Batman: The Dark Knight", pictureUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" },
    { title: "Knives Out", pictureUrl: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" },
    { title: "Parasite", pictureUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" },
    { title: "Spiderman: No Way Home", pictureUrl: "https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc=" },
    { title: "Star Wars: A New Hope", pictureUrl: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg" },
    // Add more movies as needed
  ];

  const [fetchedReviews, setFetchedReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/comment')
      .then(response => response.json())
      .then(data => setFetchedReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {fetchedReviews.map((review, index) => (
          <li key={index}>
            <strong>{review.name}</strong>
            <p>{review.comment}</p>
            <div>
              {movieList.map((movie) => (
                movie.title === review.selectedMovie && (
                  <img key={movie.title} src={movie.pictureUrl} alt={`Movie: ${movie.title}`} />
                )
              ))}
            </div>
            <div>{"⭐".repeat(review.rating)}</div>
            <button onClick={() => onUpdateReview(index)}>Update</button>
            <button onClick={() => onDeleteReview(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;

