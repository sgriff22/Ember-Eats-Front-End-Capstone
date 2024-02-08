import { Outlet, Route, Routes } from "react-router-dom";
import { BlockedWelcome } from "../components/welcome/BlockedWelcome";

export const BlockedUserView = () => {
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
        <Route index element={<BlockedWelcome />} />
      </Route>
    </Routes>
  );
};
