import { useEffect, useState } from "react";
import { getRecipeById } from "../../services/recipeService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createSaveRecipe, getAllSaves } from "../../services/savesService";
import { StarRating } from "../rate/StarRating";
import { getRatingsByRecipeId } from "../../services/ratingsService";
import { AlreadyRated } from "../rate/AlreadyRated";
import { Col, Container, Row } from "reactstrap";
import { Stars } from "../rate/Stars";
import { CommentList } from "../comments/CommentList";

export const RecipeDetails = ({ currentUser }) => {
  const [recipe, setRecipe] = useState({});
  const [saves, setSaves] = useState([]);
  const [ratings, setRatings] = useState([]);

  const { recipeId } = useParams();
  const navigate = useNavigate();

  //Get the average of the star ratings
  const property = "stars";
  const decimalPlaces = 1;
  const sum = ratings.reduce(
    (accumulator, obj) => accumulator + obj[property],
    0
  );
  const averageValue = (sum / ratings.length).toFixed(decimalPlaces);

  //Convert Date
  const date = new Date(recipe.date);
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //Break up string to be an array of strings
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

  useEffect(() => {
    getRatingsByRecipeId(recipeId).then((res) => {
      setRatings(res);
    });
  }, [recipeId]);

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
    <Container className="recipe-details">
      <Row>
        <Col sm="8">
          <h2>{recipe.title} &nbsp;</h2>
        </Col>
        <Col sm="1">
          {currentUser.id === recipe.userId || currentUser.isAdmin ? (
            <button
              className="edit"
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
            <button className="save" onClick={handleSave}>
              Save
            </button>
          ) : (
            ""
          )}
        </Col>
        <Col sm="3">
          {currentUser.id !== recipe.userId &&
          !ratings.some((rating) => rating.userId === currentUser.id) ? (
            <StarRating currentUser={currentUser} />
          ) : (
            currentUser.id !== recipe.userId && (
              <AlreadyRated ratings={ratings} currentUser={currentUser} />
            )
          )}
        </Col>
      </Row>
      <div>
        <p>
          <Link to={`/profile/${recipe.user?.id}`}>{recipe.user?.name}</Link>{" "}
          &nbsp; {formattedDate}
          &nbsp; <Stars averageValue={averageValue} />
        </p>
        <p>{recipe.description}</p>
        <img src={recipe.image} alt={recipe.name} />
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
      <CommentList recipe={recipe} currentUser={currentUser} />
    </Container>
  );
};
