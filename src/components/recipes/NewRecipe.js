import { RecipeForm } from "../forms/RecipeForm";

export const NewRecipe = () => {
  const handleInputChange = (e) => {};

  return (
    <div>
      <h2>New Recipe</h2>
      <RecipeForm handleInputChange={handleInputChange} />
    </div>
  );
};
