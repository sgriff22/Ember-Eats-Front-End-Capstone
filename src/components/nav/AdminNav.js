import { useNavigate } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import "./NavBar.css";
import logo from "../../assets/logo/logo-white-transparent-noSlogan.png";
import colorLogo from "../../assets/logo/color-logo.png";
import { useState } from "react";

export const AdminNav = ({ currentUser }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar className="navbar-container" color="dark" fixed="top" dark>
      <NavbarBrand
        href="/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          alt="EmberEats logo"
          src={isHovered ? colorLogo : logo}
          style={{
            height: "50px",
          }}
        />
      </NavbarBrand>
      <Nav style={{ marginRight: "auto" }}>
        <NavItem>
          <NavLink href="/recipes">Recipes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/users">Users</NavLink>
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
      </Nav>
      {localStorage.getItem("ember_user") ? (
        <Nav>
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
        </Nav>
      ) : (
        ""
      )}
    </Navbar>
  );
};
