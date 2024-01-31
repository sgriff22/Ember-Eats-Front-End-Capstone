import { useEffect, useState } from "react";
import { getRecipeById } from "../../services/recipeService";
import { useNavigate, useParams } from "react-router-dom";
import { createSaveRecipe, getAllSaves } from "../../services/savesService";

export const RecipeDetails = ({ currentUser }) => {
  const [recipe, setRecipe] = useState({});
  const [saves, setSaves] = useState([]);
  const { recipeId } = useParams();

  const navigate = useNavigate();

  const date = new Date(recipe.date);
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const ingredients = `${recipe.ingredients}`;
  const ingredientsArray = ingredients.split(", ");

  const steps = `${recipe.steps}`;
  const stepsArray = steps.split(", ");

  useEffect(() => {
    getRecipeById(recipeId).then((data) => {
      const recipeObj = data[0];
      setRecipe(recipeObj);
    });
  }, [recipeId]);

  useEffect(() => {
    getAllSaves().then((res) => {
      const userSaves = res.filter((save) => save.userId === currentUser.id);
      setSaves(userSaves);
    });
  }, [currentUser]);

  const handleSave = () => {
    const saveObj = {
      userId: currentUser.id,
      recipeId: recipe.id,
    };
    createSaveRecipe(saveObj).then(() => {
      navigate("/myRecipes");
    });
  };

  return (
    <div>
      <h2>
        {recipe.title} &nbsp;
        <span>
          {currentUser.id === recipe.userId ? (
            <button
              onClick={() => {
                navigate(`/recipes/${recipeId}/editRecipe`);
              }}
            >
              Edit
            </button>
          ) : (
            ""
          )}
          {currentUser.id !== recipe.userId &&
          !saves.some((save) => save.recipeId === recipe.id) ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            ""
          )}
        </span>
      </h2>

      <div>
        <p>
          {recipe.user?.name} &nbsp; {formattedDate}
          {/* Add Recipe rating */}{" "}
        </p>
        <p>{recipe.description}</p>
        {/* Add Recipe image */}
        <div>
          <h4>Ingredients</h4>
          <ul>
            {ingredientsArray.map((ingredient) => {
              return <li key={ingredient}>{ingredient}</li>;
            })}
          </ul>
        </div>
        <div>
          <h4>Steps</h4>
          <ol>
            {stepsArray.map((step) => {
              return <li key={step}>{step}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
