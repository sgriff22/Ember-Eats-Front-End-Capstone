import { useEffect, useState } from "react";
import { RecipeForm } from "../forms/RecipeForm";
import { addNewRecipe } from "../../services/recipeService";
import { useNavigate } from "react-router-dom";

export const NewRecipe = ({ currentUser }) => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
    categoryId: 0,
    mealId: 0,
  });
  const [stepsString, setStepsString] = useState("");
  const [ingredientsString, setIngredientsString] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const stepsString = newRecipe.steps;
    const updatedSteps = stepsString.split("\n").join(", ");
    setStepsString(updatedSteps);

    const ingredientsString = newRecipe.ingredients;
    const updatedIngredients = ingredientsString.split("\n").join(", ");
    setIngredientsString(updatedIngredients);
  }, [newRecipe]);

  const handleInputChange = (e) => {
    const stateCopy = { ...newRecipe };
    if (e.target.name === "categoryId" || e.target.name === "mealId") {
      stateCopy[e.target.name] = parseInt(e.target.value);
      setNewRecipe(stateCopy);
    } else {
      stateCopy[e.target.name] = e.target.value;
      setNewRecipe(stateCopy);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipeObj = {
      title: newRecipe.title,
      description: newRecipe.description,
      ingredients: ingredientsString,
      userId: currentUser.id,
      steps: stepsString,
      categoryId: newRecipe.categoryId,
      mealId: newRecipe.mealId,
      date: new Date(),
    };

    addNewRecipe(recipeObj).then((res) => {
      navigate(`/recipes/${res.id}`);
    });
  };

  return (
    <div>
      <RecipeForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        newRecipe={newRecipe}
      />
    </div>
  );
};
