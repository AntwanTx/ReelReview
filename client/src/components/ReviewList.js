
import React from 'react';

const ReviewList = ({ reviews, onDeleteReview }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.name}</strong>
            <p>{review.comment}</p>
            <div>{"⭐".repeat(review.rating)}</div>
            <button onClick={() => onDeleteReview(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;

