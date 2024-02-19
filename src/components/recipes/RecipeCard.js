import React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import "./Recipes.css";
import { Link } from "react-router-dom";
import { Stars } from "../rate/Stars";

export const RecipeCard = ({ recipe }) => {
  const property = "stars";
  const decimalPlaces = 1;
  const sum = recipe.ratings?.reduce(
    (accumulator, obj) => accumulator + obj[property],
    0
  );
  const averageValue = (sum / recipe.ratings?.length).toFixed(decimalPlaces);

  return (
    <Link to={`/recipes/${recipe.id}`}>
      <Card id="recipe-card" color="secondary" inverse>
        <div id="recipe-img-container">
          <img alt={"image of " + recipe.name} src={recipe.image} />
        </div>
        <Row id="card-stars">
          <Col>
            {recipe.ratings.length > 0 ? (
              <Stars averageValue={averageValue} />
            ) : (
              <span className="no-rate">No Ratings Yet</span>
            )}
          </Col>
        </Row>
        <CardBody id="card-body-recipe">
          <CardTitle tag="h5">{recipe.title}</CardTitle>
          <CardText>{recipe.description}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};
