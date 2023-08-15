// ReviewList.js
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.name}</strong>
            <p>{review.comment}</p>
            <div>{"⭐".repeat(review.rating)}</div> {/* Star emojis */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
