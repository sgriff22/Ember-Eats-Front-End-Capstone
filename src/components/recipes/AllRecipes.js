import React from "react";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../../services/recipeService";
import { RecipeCard } from "./RecipeCard";
import { RecipeFilterBar } from "./RecipeFilterBar";
import { getAllCategories } from "../../services/categoryService";
import { getAllMeals } from "../../services/mealService";
import { Col, Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategoryId, setSearchCategoryId] = useState(0);
  const [searchMealId, setSearchMealId] = useState(0);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

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

  //Search Filter
  useEffect(() => {
    if (searchTerm) {
      const foundRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRecipes(foundRecipes);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [recipes, searchTerm]);

  //Category filter
  useEffect(() => {
    if (searchCategoryId) {
      const foundRecipes = recipes.filter(
        (recipe) => recipe.categoryId === searchCategoryId
      );
      setFilteredRecipes(foundRecipes);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [recipes, searchCategoryId]);

  //Meal filter
  useEffect(() => {
    if (searchMealId) {
      const foundRecipes = recipes.filter(
        (recipe) => recipe.mealId === searchMealId
      );
      setFilteredRecipes(foundRecipes);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [recipes, searchMealId]);

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
          {filteredRecipes.map((recipe) => {
            return (
              <Col sm={3} key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
