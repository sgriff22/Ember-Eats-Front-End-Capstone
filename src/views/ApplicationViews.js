import { useEffect, useState } from "react";
import { AdminViews } from "./AdminViews";
import { UserViews } from "./UserViews";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localEmberUser = localStorage.getItem("ember_user");
    const emberUserObject = JSON.parse(localEmberUser);

    setCurrentUser(emberUserObject);
  }, []);

  return currentUser.isAdmin ? (
    <AdminViews currentUser={currentUser} />
  ) : (
    <UserViews currentUser={currentUser} />
  );
};
