import React, { useEffect, useState } from "react";
import "./StarRating.css";
import {
  addNewRating,
  editRating,
  getRatingsByRecipeId,
} from "../../services/ratingsService";
import { useParams } from "react-router-dom";

export const StarRating = ({
  currentUser,
  setIsEditing,
  updateStarRating,
  onRatingUpdate
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [alreadyRated, setAlreadyRated] = useState({});

  const { recipeId } = useParams();

  useEffect(() => {
    getRatingsByRecipeId(recipeId).then((res) => {
      const currentUserRating = res.filter((r) => r.userId === currentUser.id);
      setAlreadyRated(currentUserRating[0]);
    });
  }, [currentUser, recipeId]);

  const handleSubmit = () => {
    if (alreadyRated) {
      const alreadyRatedObj = {
        id: alreadyRated.id,
        userId: alreadyRated.userId,
        recipeId: alreadyRated.recipeId,
        stars: rating,
      };

      editRating(alreadyRatedObj).then((res) => {
        updateStarRating(res.stars);
        setIsEditing(false);
      });
    } else {
      const ratingObj = {
        userId: currentUser.id,
        recipeId: parseInt(recipeId),
        stars: rating,
      };
      addNewRating(ratingObj).then((res) => {
        onRatingUpdate(res.stars)
      });
    }
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
