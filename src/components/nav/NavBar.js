import { Link, useNavigate } from "react-router-dom";

export const NavBar = ({ currentUser }) => {
  const navigate = useNavigate();

  return (
    <ul>
      <li>
        <Link to="./">
          <img
            alt="EmberEats logo"
            src={"images/logo-black.png"}
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </Link>
      </li>
      <li>
        <Link to="./recipes">Recipes</Link>
      </li>
      <li>
        <Link to={"./myRecipes"}>My Recipes</Link>
      </li>
      <li>
        <Link to={"./newRecipe"}>New Recipe</Link>
      </li>
      <li>
        <Link to={`./profile/${currentUser.id}`}>Profile</Link>
      </li>
      {localStorage.getItem("ember_user") ? (
        <li>
          <Link
            to=""
            onClick={() => {
              localStorage.removeItem("ember_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
