import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUserById } from "../../services/userService";
import { getRecipesByUserId } from "../../services/recipeService";
import { Col, Container, Row } from "reactstrap";
import { RecipeCard } from "../recipes/RecipeCard";
import "./Profile.css";

export const Profile = ({ currentUser }) => {
  const [user, setUser] = useState({});
  const [recipes, setRecipes] = useState([]);
  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getUserById(userId).then((data) => {
      const userObj = data[0];
      setUser(userObj);
    });
  }, [userId]);

  useEffect(() => {
    getRecipesByUserId(userId).then((res) => {
      setRecipes(res);
    });
  }, [userId]);

  const handleBlockToggle = () => {
    const updateUser = {
      ...user,
      isBlocked: !user.isBlocked,
    };
    editUser(updateUser).then(() => {
      getUserById(userId).then((data) => {
        const response = data[0];
        setUser(response);
      });
    });
  };

  return (
    <div className="profile-container">
      <div className="edit-button">
        {currentUser.id === user.id || currentUser.isAdmin ? (
          <button
            onClick={() => {
              const targetUserId = currentUser.isAdmin
                ? user.id
                : currentUser.id;
              navigate(`/profile/${targetUserId}/editProfile`);
            }}
          >
            Edit Profile
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="block-button">
        {currentUser.isAdmin && currentUser.id !== user.id && (
          <button onClick={handleBlockToggle}>
            {user.isBlocked ? "Unblock User" : "Block User"}
          </button>
        )}
      </div>
      <div className="image-container">
        <img
          src={user.image}
          alt={`${user.name} smiling and facing the camera`}
        />
      </div>
      <h2>{user.name} &nbsp;</h2>
      <p className="email">Email: {user.email}</p>
      <h4>About Me</h4>
      <p className="bio">{user.bio}</p>
      <div>
        <h4>Recipes Created</h4>
        <Container fluid="md" className="mt-4">
          <Row>
            {recipes.map((recipe) => {
              return (
                <Col sm={3} key={recipe.id}>
                  <RecipeCard recipe={recipe} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};
