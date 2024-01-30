import { Outlet, Route, Routes } from "react-router-dom";
import { AllRecipes } from "../components/recipes/AllRecipes";
import { RecipeDetails } from "../components/recipes/RecipeDetails";

export const UserViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path="allRecipes">
          <Route index element={<AllRecipes />} />
          <Route path=":recipeId" element={<RecipeDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
