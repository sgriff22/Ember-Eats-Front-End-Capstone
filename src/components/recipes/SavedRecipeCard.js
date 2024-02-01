import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { deleteSave } from "../../services/savesService";
import { Link } from "react-router-dom";

export const SavedRecipeCard = ({ recipe, setMyRecipes,  myRecipes }) => {
  const handleRemoveSave = () => {
    deleteSave(recipe.id).then(() => {
      const updatedRecipes = myRecipes.filter((savedRecipe) => savedRecipe.id !== recipe.id);
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
          alt="Sample"
          src="https://picsum.photos/300/200"
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <CardBody style={{ color: "white" }}>
          <CardTitle tag="h5">{recipe.recipe.title}</CardTitle>
          <CardText>{recipe.recipe.description}</CardText>
        </CardBody>
      </Link>
      <Button color="light" onClick={handleRemoveSave}>
        Remove
      </Button>
    </Card>
  );
};
