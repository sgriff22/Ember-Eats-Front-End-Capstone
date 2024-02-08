import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome";
import { AdminNav } from "../components/nav/AdminNav";
import { RecipeDetails } from "../components/recipes/RecipeDetails";
import { AllRecipes } from "../components/recipes/AllRecipes";
import { EditRecipe } from "../components/recipes/EditRecipe";
import { NewRecipe } from "../components/recipes/NewRecipe";
import { MyRecipes } from "../components/recipes/MyRecipes";
import { Profile } from "../components/profile/Profile";
import { ProfileForm } from "../components/forms/ProfileForm";
import { UsersList } from "../components/users/UsersList";

export const AdminViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AdminNav currentUser={currentUser} />
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
        <Route path="users" element={<UsersList />}/>
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
