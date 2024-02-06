import { useEffect, useState } from "react";
import { StarRating } from "./StarRating";

export const AlreadyRated = ({ currentUser, ratings }) => {
  const [starRating, setStarRating] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const filterRatings = ratings.filter(
      (rating) => currentUser.id === rating.userId
    );
    const ratingObj = filterRatings[0];
    const numberOfStars = ratingObj.stars;
    setStarRating(numberOfStars);
  }, [currentUser, ratings]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <StarRating currentUser={currentUser} />
      ) : (
        <div>
          <div>Your Rating</div>
          {Array.from({ length: starRating }, (_, index) => (
            <span key={index} className="star">
              &#9733;
            </span>
          ))}
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};
