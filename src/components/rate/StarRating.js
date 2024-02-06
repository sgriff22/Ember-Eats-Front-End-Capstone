import React, { useState } from "react";
import "./StarRating.css";
import { addNewRating } from "../../services/ratingsService";
import { useParams } from "react-router-dom";

export const StarRating = ({ currentUser, setChosenRating }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const { recipeId } = useParams();

  const handleSubmit = () => {
    const ratingObj = {
      userId: currentUser.id,
      recipeId: parseInt(recipeId),
      stars: rating,
    };
    addNewRating(ratingObj).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="star-rating">
      <h5 className="rate-header">Rate Recipe</h5>
      {[0, 1, 2, 3, 4].map((index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <button className="rate" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
