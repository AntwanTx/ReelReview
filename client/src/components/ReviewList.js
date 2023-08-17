
import React from 'react';

const ReviewList = ({ reviews, onDeleteReview }) => {

  const movieList = [
    // Define your movie list with their respective picture URLs
    { title: "AMRICAN PSYCHO", pictureUrl: "https://images.justwatch.com/poster/284907871/s592/american-psycho-1" },
    { title: "AVENGERS", pictureUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" },
    { title: "BARBIE", pictureUrl: "https://www.themoviedb.org/t/p/original/i7QrCnwzdp6NyyAPPtJloKZmbBH.jpg" },
    { title: "BATMAN: THE DARK KNIGHT", pictureUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" },
    { title: "KNIVES OUT", pictureUrl: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" },
    { title: "PARASITE", pictureUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" },
    { title: "SPIDERMAN: NO WAY HOME", pictureUrl: "https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc=" },
    { title: "STAR WARS: A NEW HOPE", pictureUrl: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg" },
    // Add more movies as needed
  ];

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
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
            <button onClick={() => onDeleteReview(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;

