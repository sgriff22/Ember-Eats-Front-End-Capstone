import { useEffect, useState } from "react";

export const AlreadyRated = ({ currentUser, ratings }) => {
  const [starRating, setStarRating] = useState(0);

  useEffect(() => {
    const filterRatings = ratings.filter(
      (rating) => currentUser.id === rating.userId
    );
    const ratingObj = filterRatings[0];
    const numberOfStars = ratingObj ? ratingObj.stars : 0;
    setStarRating(numberOfStars);
  }, [currentUser, ratings]);

  return (
    <div>
      <div>Your Rating</div>
      {Array.from({ length: starRating }, (_, index) => (
        <span key={index} className="star">
          &#9733;
        </span>
      ))}
      {/* Add edit functionality */}
      <button>Edit</button>
    </div>
  );
};
