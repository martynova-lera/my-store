import React from 'react';

const RatingStars = ({ rating }) => {
  const fullStars = Math.round(rating);
  
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < fullStars ? 'filled' : ''}`}
        >
          ★
        </span>
      ))}
      <span className="rating-value">({rating})</span>
    </div>
  );
};

export default RatingStars;