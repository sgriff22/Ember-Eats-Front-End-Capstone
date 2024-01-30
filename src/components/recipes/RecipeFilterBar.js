export const RecipeFilterBar = ({
  setSearchCategoryId,
  setSearchMealId,
  setSearchTerm,
  categories,
  meals,
}) => {
  return (
    <div className="filter-bar">
      <div>
        <input
          type="text"
          placeholder="Search Recipes"
          className="recipe-search"
          name="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        <select
          id="category-search"
          onChange={(event) => {
            setSearchCategoryId(parseInt(event.target.value));
          }}
        >
          <option value="0">Filter by category...</option>
          {categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <select
          id="meal-search"
          onChange={(event) => {
            setSearchMealId(parseInt(event.target.value));
          }}
        >
          <option value="0">Filter by meal...</option>
          {meals.map((meal) => {
            return (
              <option value={meal.id} key={meal.id}>
                {meal.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};