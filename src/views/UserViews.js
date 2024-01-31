import { Outlet, Route, Routes } from "react-router-dom";
import { AllRecipes } from "../components/recipes/AllRecipes";
import { RecipeDetails } from "../components/recipes/RecipeDetails";
import { NavBar } from "../components/nav/NavBar";
import { Welcome } from "../welcome/Welcome";
import { MyRecipes } from "../components/recipes/MyRecipes";
import { NewRecipe } from "../components/recipes/NewRecipe";
import { Profile } from "../components/profile/Profile";
import { EditRecipe } from "../components/recipes/EditRecipe";

export const UserViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="recipes">
          <Route index element={<AllRecipes />} />
          <Route path=":recipeId">
            <Route
              index
              element={<RecipeDetails currentUser={currentUser} />}
            />
            <Route path="editRecipe" element={<EditRecipe/>} />
          </Route>
        </Route>
        <Route
          path="myRecipes"
          element={<MyRecipes currentUser={currentUser} />}
        />
        <Route
          path="newRecipe"
          element={<NewRecipe currentUser={currentUser} />}
        />
        <Route path="profile" element={<Profile currentUser={currentUser} />} />
      </Route>
    </Routes>
  );
};
