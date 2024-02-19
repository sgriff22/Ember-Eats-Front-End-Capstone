import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
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
    <Card id="recipe-card" color="secondary" inverse>
      <Link to={`/recipes/${recipe.recipeId}`}>
        <div id="recipe-img-container">
          <img
            id="saved-recipe"
            alt={"image of " + recipe.name}
            src={recipe.recipe.image}
          />
        </div>
        <Row id="card-stars">
          <Col>
            {ratings.length > 0 ? (
              <Stars averageValue={averageValue} />
            ) : (
              <span className="no-rate">No Ratings Yet</span>
            )}
          </Col>
        </Row>
        <CardBody id="card-body-recipe">
          <CardTitle tag="h5">{recipe.recipe.title}</CardTitle>
          <CardText>{recipe.recipe.description}</CardText>
        </CardBody>
      </Link>
      <div className="remove-container position-absolute bottom-0 end-0">
        <Button color="light" onClick={handleRemoveSave} id="remove">
          Remove
        </Button>
      </div>
    </Card>
  );
};
