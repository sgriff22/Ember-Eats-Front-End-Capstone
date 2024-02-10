import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { deleteSave } from "../../services/savesService";
import { Link } from "react-router-dom";
import "./Recipes.css";
import { Stars } from "../rate/Stars";
import { getRatingsByRecipeId } from "../../services/ratingsService";
import { useEffect, useState } from "react";

export const SavedRecipeCard = ({ recipe, setMyRecipes, myRecipes }) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    getRatingsByRecipeId(recipe.recipeId).then((res) => {
      setRatings(res);
    });
  }, [recipe]);

  const property = "stars";
  const decimalPlaces = 1;
  const sum = ratings.reduce(
    (accumulator, obj) => accumulator + obj[property],
    0
  );
  const averageValue = (sum / ratings.length).toFixed(decimalPlaces);

  const handleRemoveSave = () => {
    deleteSave(recipe.id).then(() => {
      const updatedRecipes = myRecipes.filter(
        (savedRecipe) => savedRecipe.id !== recipe.id
      );
      setMyRecipes(updatedRecipes);
    });
  };

  return (
    <Card
      color="secondary"
      inverse
      style={{
        width: "15rem",
        height: "25rem",
      }}
    >
      <Link to={`/recipes/${recipe.recipeId}`}>
        <img
          alt={"image of " + recipe.name}
          src={recipe.recipe.image}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Stars averageValue={averageValue} />
        <CardBody style={{ color: "white" }}>
          <CardTitle tag="h5">{recipe.recipe.title}</CardTitle>
          <CardText>{recipe.recipe.description}</CardText>
        </CardBody>
      </Link>
      <Button color="light" onClick={handleRemoveSave} id="remove">
        Remove
      </Button>
    </Card>
  );
};
