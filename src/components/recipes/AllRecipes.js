import { useEffect, useState } from "react";
import { getAllRecipes } from "../../services/recipeService";
import { RecipeCard } from "./RecipeCard";
import { Col, Container, Row } from "reactstrap";
import "./Recipes.css";
import React from "react";
import { RecipeFilterBar } from "./RecipeFilterBar";
import { getAllCategories } from "../../services/categoryService";
import { getAllMeals } from "../../services/mealService";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategoryId, setSearchCategoryId] = useState(0);
  const [searchMealId, setSearchMealId] = useState(0);

  useEffect(() => {
    getAllRecipes().then((recipesArray) => {
      setRecipes(recipesArray);
    });
  }, []);

  useEffect(() => {
    getAllCategories().then((categoryArr) => {
      setCategories(categoryArr);
    });
  }, []);

  useEffect(() => {
    getAllMeals().then((mealArr) => {
      setMeals(mealArr);
    });
  }, []);

  return (
    <div>
      <h1>All Recipes</h1>

      <RecipeFilterBar
        setSearchCategoryId={setSearchCategoryId}
        setSearchMealId={setSearchMealId}
        setSearchTerm={setSearchTerm}
        categories={categories}
        meals={meals}
      />

      <Container fluid="md">
        <Row>
          {recipes.map((recipe) => {
            return (
              <Col sm={4} key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
