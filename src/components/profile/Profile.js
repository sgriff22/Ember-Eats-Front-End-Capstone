import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../services/userService";
import { getRecipesByUserId } from "../../services/recipeService";
import { Col, Container, Row } from "reactstrap";
import { RecipeCard } from "../recipes/RecipeCard";

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

  return (
    <div>
      <h2>
        {user.name} &nbsp;
        <span>
          {currentUser.id === user.id && (
            <button
              onClick={() => {
                navigate(`/profile/${currentUser.id}/editProfile`);
              }}
            >
              Edit
            </button>
          )}
        </span>
      </h2>
      <p>Email: {user.email}</p>
      <h5>About Me</h5>
      <p>{user.bio}</p>
      <div>
        <h4>Recipes Created</h4>
        <Container fluid="md">
          <Row>
            {recipes.map((recipe) => {
              return (
                <Col sm={4} key={recipe.id}>
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
