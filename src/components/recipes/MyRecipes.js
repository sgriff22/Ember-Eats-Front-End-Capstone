import { getRecipesByUserId } from "../../services/recipeService";
import { getSavesByUserId } from "../../services/savesService";
import { useEffect, useState } from "react";
import { RecipeFilterBar } from "./RecipeFilterBar";
import { getAllCategories } from "../../services/categoryService";
import { getAllMeals } from "../../services/mealService";
import { Col, Container, Row } from "reactstrap";
import { RecipeCard } from "./RecipeCard";
import { SavedRecipeCard } from "./SavedRecipeCard";

export const MyRecipes = ({ currentUser }) => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategoryId, setSearchCategoryId] = useState(0);
  const [searchMealId, setSearchMealId] = useState(0);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    getSavesByUserId(currentUser.id).then((data) => {
      setMyRecipes(data);
      getRecipesByUserId(currentUser.id).then((data) => {
        setMyRecipes((prevRecipes) => [...prevRecipes, ...data]);
      });
    });
  }, [currentUser]);

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
      const foundRecipes = myRecipes.filter((recipe) => {
        const recipeTitleMatch =
          recipe.title &&
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

        const savedRecipeTitleMatch =
          recipe.recipe?.title &&
          recipe.recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

        return recipeTitleMatch || savedRecipeTitleMatch;
      });
      setFilteredRecipes(foundRecipes);
    } else {
      setFilteredRecipes(myRecipes);
    }
  }, [myRecipes, searchTerm]);

  //Category filter
  useEffect(() => {
    if (searchCategoryId) {
      const foundRecipes = myRecipes.filter(
        (recipe) =>
          recipe.categoryId === searchCategoryId ||
          recipe.recipe?.categoryId === searchCategoryId
      );
      setFilteredRecipes(foundRecipes);
    } else {
      setFilteredRecipes(myRecipes);
    }
  }, [myRecipes, searchCategoryId]);

  //Meal filter
  useEffect(() => {
    if (searchMealId) {
      const foundRecipes = myRecipes.filter(
        (recipe) =>
          recipe.mealId === searchMealId ||
          recipe.recipe?.mealId === searchMealId
      );
      setFilteredRecipes(foundRecipes);
    } else {
      setFilteredRecipes(myRecipes);
    }
  }, [myRecipes, searchMealId]);

  return (
    <div>
      <h2>My Recipes</h2>
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
              <Col sm={4} key={recipe.id}>
                {recipe.recipeId ? (
                  <SavedRecipeCard
                    recipe={recipe}
                    myRecipes={myRecipes}
                    setMyRecipes={setMyRecipes}
                  />
                ) : (
                  <RecipeCard recipe={recipe} />
                )}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
