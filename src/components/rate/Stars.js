export const Stars = ({ averageValue }) => {
  return (
    <span id="stars">
      {Array.from({ length: averageValue }, (_, index) => (
        <span key={index} className="star">
          &#9733;
        </span>
      ))}
      {averageValue}
    </span>
  );
};
