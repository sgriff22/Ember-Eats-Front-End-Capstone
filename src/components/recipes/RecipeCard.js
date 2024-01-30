import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./Recipes.css"

export const RecipeCard = ({ recipe }) => {
  return (
    <Card
      color="secondary"
      inverse
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h5">{recipe.title}</CardTitle>
        <CardText>
          {recipe.description}
        </CardText>
      </CardBody>
    </Card>
  );
};