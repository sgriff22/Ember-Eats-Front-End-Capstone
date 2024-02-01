import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import { getAllCategories } from "../../services/categoryService";
import { getAllMeals } from "../../services/mealService";

export const RecipeForm = ({
  handleEditSave,
  recipe,
  handleInputChange,
  newRecipe,
  handleSubmit,
}) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllMeals().then((res) => {
      setMeals(res);
    });
  }, []);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <Form>
      <FormGroup>
        <Label for="recipeTitle">Title</Label>
        <Input
          id="recipeTitle"
          name="title"
          placeholder="Give your recipe a title"
          type="text"
          value={(recipe && recipe?.title) || newRecipe?.title || ""}
          required
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="recipeDescription">Description</Label>
        <Input
          id="recipeDescription"
          name="description"
          placeholder="Give a brief description of your recipe"
          type="text"
          value={
            (recipe && recipe?.description) || newRecipe?.description || ""
          }
          required
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Container>
          <Row>
            <Col>
              <FormGroup>
                <Label for="recipeIngredients">Ingredients</Label>
                <Input
                  id="recipeIngredients"
                  name="ingredients"
                  placeholder={`List the ingredients for your recipe\nExample:\nitem\nitem\nitem`}
                  type="textarea"
                  value={
                    (recipe && recipe?.ingredients) ||
                    newRecipe?.ingredients ||
                    ""
                  }
                  required
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="recipeSteps">Steps</Label>
                <Input
                  id="recipeSteps"
                  name="steps"
                  placeholder={`List the steps for your recipe\nExample:\nstep 1\nstep 2\nstep 3`}
                  type="textarea"
                  value={(recipe && recipe?.steps) || newRecipe?.steps || ""}
                  required
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </FormGroup>
      <FormGroup>
        <Container>
          <Row>
            <Col>
              <FormGroup>
                <Label for="categorySelect">Category</Label>
                <Input
                  id="categorySelect"
                  name="categoryId"
                  type="select"
                  required
                  value={
                    (recipe && recipe?.categoryId) ||
                    newRecipe?.categoryId ||
                    ""
                  }
                  onChange={handleInputChange}
                >
                  <option>Choose recipe category</option>
                  {categories.map((cat) => {
                    return (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="mealSelect">Meal</Label>
                <Input
                  id="mealSelect"
                  name="mealId"
                  type="select"
                  value={(recipe && recipe?.mealId) || newRecipe?.mealId || ""}
                  required
                  onChange={handleInputChange}
                >
                  <option value="0">Choose a meal type</option>
                  {meals.map((meal) => {
                    return (
                      <option key={meal.id} value={meal.id}>
                        {meal.name}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </FormGroup>
      <FormGroup>
        <Label for="recipeImage">Image</Label>
        <Input id="recipeImage" name="image" type="file" />
        <FormText></FormText>
      </FormGroup>
      {recipe ? (
        <Button onClick={handleEditSave}>Save</Button>
      ) : (
        <Button onClick={handleSubmit}>Submit</Button>
      )}
    </Form>
  );
};
