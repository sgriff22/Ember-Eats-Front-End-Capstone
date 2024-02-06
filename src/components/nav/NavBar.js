import { useLocation, useNavigate } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import "./NavBar.css";

export const NavBar = ({ currentUser }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const currentRoute = location.pathname;

  console.log("Current Route:", currentRoute);

  return (
    <Navbar className="navbar-container" color="dark" fixed="top" dark>
      <NavbarBrand href="/">
        <img
          alt="EmberEats logo"
          src={"/images/logo-white-transparent-noSlogan.png"}
          style={{
            height: "50px",
          }}
        />
      </NavbarBrand>
      <Nav>
        <NavItem className="text">
          <NavLink href="/recipes">Recipes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/myRecipes">My Recipes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/newRecipe">New Recipe</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={`/profile/${currentUser.id}`}>Profile</NavLink>
        </NavItem>
        {localStorage.getItem("ember_user") ? (
          <NavItem>
            <NavLink
              href=""
              onClick={() => {
                localStorage.removeItem("ember_user");
                navigate("/", { replace: true });
              }}
            >
              Logout
            </NavLink>
          </NavItem>
        ) : (
          ""
        )}
      </Nav>
    </Navbar>

    // <ul>
    //   <li>
    //     <Link to="./">
    //       <img
    //         alt="EmberEats logo"
    //         src={"images/logo-black.png"}
    //         style={{
    //           width: "80px",
    //           height: "80px",
    //         }}
    //       />
    //     </Link>
    //   </li>
    //   <li>
    //     <Link to="./recipes">Recipes</Link>
    //   </li>
    //   <li>
    //     <Link to={"./myRecipes"}>My Recipes</Link>
    //   </li>
    //   <li>
    //     <Link to={"./newRecipe"}>New Recipe</Link>
    //   </li>
    //   <li>
    //     <Link to={`./profile/${currentUser.id}`}>Profile</Link>
    //   </li>
    //   {localStorage.getItem("ember_user") ? (
    //     <li>
    //       <Link
    //         to=""
    //         onClick={() => {
    //           localStorage.removeItem("ember_user");
    //           navigate("/", { replace: true });
    //         }}
    //       >
    //         Logout
    //       </Link>
    //     </li>
    //   ) : (
    //     ""
    //   )}
    // </ul>
  );
};
