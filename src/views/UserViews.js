import { Outlet, Route, Routes } from "react-router-dom";
import { AllRecipes } from "../components/recipes/AllRecipes";
import { RecipeDetails } from "../components/recipes/RecipeDetails";
import { NavBar } from "../components/nav/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { MyRecipes } from "../components/recipes/MyRecipes";
import { NewRecipe } from "../components/recipes/NewRecipe";
import { Profile } from "../components/profile/Profile";
import { EditRecipe } from "../components/recipes/EditRecipe";
import { ProfileForm } from "../components/forms/ProfileForm";

export const UserViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar currentUser={currentUser} />
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
            <Route path="editRecipe" element={<EditRecipe />} />
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
        <Route path="profile/:userId">
          <Route index element={<Profile currentUser={currentUser} />} />
          <Route
            path="editProfile"
            element={<ProfileForm currentUser={currentUser} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
