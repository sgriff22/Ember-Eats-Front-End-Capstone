import { useNavigate, useParams } from "react-router-dom";
import { RecipeForm } from "../forms/RecipeForm";
import { editRecipe, getRecipeById } from "../../services/recipeService";
import { useEffect, useState } from "react";

export const EditRecipe = () => {
  const [recipe, setRecipe] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRecipeById(recipeId).then((data) => {
      const recipeObj = data[0];
      setRecipe(recipeObj);
    });
  }, [recipeId]);

  const handleInputChange = (e) => {
    const stateCopy = { ...recipe };
    if (e.target.name === "categoryId" || e.target.name === "mealId") {
      stateCopy[e.target.name] = parseInt(e.target.value);
      setRecipe(stateCopy);
    } else {
      stateCopy[e.target.name] = e.target.value;
      setRecipe(stateCopy);
    }
  };

  const handleEditSave = (event) => {
    event.preventDefault();

    const recipeObj = {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      userId: recipe.userId,
      steps: recipe.steps,
      categoryId: recipe.categoryId,
      mealId: recipe.mealId,
      date: recipe.date,
      image: imageUrl,
    };

    editRecipe(recipeObj).then(() => {
      navigate(`/recipes/${recipeId}`);
    });
  };

  return (
    <div>
      <RecipeForm
        handleEditSave={handleEditSave}
        recipe={recipe}
        handleInputChange={handleInputChange}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />
    </div>
  );
};
