import { useEffect, useState } from "react";
import { StarRating } from "./StarRating";

export const AlreadyRated = ({ currentUser, ratings, setRatings }) => {
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

  const updateStarRating = (newRating) => {
    setStarRating(newRating);

    //Update the existing rating average directly in the state
    //If true new object else just rating
    setRatings((prevRatings) =>
      prevRatings.map((rating) =>
        rating.userId === currentUser.id
          ? { ...rating, stars: newRating }
          : rating
      )
    );
  };

  return (
    <div>
      {isEditing ? (
        <StarRating
          currentUser={currentUser}
          setIsEditing={setIsEditing}
          updateStarRating={updateStarRating}
        />
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
