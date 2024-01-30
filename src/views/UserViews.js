import { Outlet, Route, Routes } from "react-router-dom";
import { AllRecipes } from "../components/recipes/AllRecipes";

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
        <Route path="allRecipes" element={<AllRecipes />} />
      </Route>
    </Routes>
  );
};
