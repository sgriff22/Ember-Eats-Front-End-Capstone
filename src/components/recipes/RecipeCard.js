import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
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
      <Card
        color="secondary"
        inverse
        style={{
          width: "15rem",
          height: "25rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <Stars averageValue={averageValue} />
        <CardBody id="card-body">
          <CardTitle tag="h5">{recipe.title}</CardTitle>
          <CardText>{recipe.description}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};
