import { useEffect, useState } from "react";
import { AdminViews } from "./AdminViews";
import { UserViews } from "./UserViews";
import { BlockedUserView } from "./BlockedUserView";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localEmberUser = localStorage.getItem("ember_user");
    const emberUserObject = JSON.parse(localEmberUser);

    setCurrentUser(emberUserObject);
  }, []);

  if (currentUser.isBlocked && !currentUser.isAdmin) {
    // Render a different view for blocked users
    return <BlockedUserView currentUser={currentUser} />;
  } else if (currentUser.isAdmin) {
    // Render admin views
    return <AdminViews currentUser={currentUser} />;
  } else {
    // Render user views
    return <UserViews currentUser={currentUser} />;
  }
};
