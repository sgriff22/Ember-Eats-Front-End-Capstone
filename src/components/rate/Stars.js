export const Stars = ({ averageValue }) => {
  return (
    <span>
      {Array.from({ length: averageValue }, (_, index) => (
        <span key={index} className="star">
          &#9733;
        </span>
      ))}
      <label>{averageValue}</label>
    </span>
  );
};
