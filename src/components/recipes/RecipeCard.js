import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./Recipes.css";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe }) => {
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
        <CardBody>
          <CardTitle tag="h5">{recipe.title}</CardTitle>
          <CardText>{recipe.description}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};
