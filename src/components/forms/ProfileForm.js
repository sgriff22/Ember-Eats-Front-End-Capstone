import { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { editUser, getUserById } from "../../services/userService";
import { useNavigate, useParams } from "react-router-dom";
import { UploadWidget } from "./UploadWidget";
import "./Form.css";

export const ProfileForm = () => {
  const [user, setUser] = useState({
    name: "",
    bio: "",
    email: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(userId).then((data) => {
      const userObj = data[0];
      setUser(userObj);
    });
  }, [userId]);

  const handleInputChange = (e) => {
    const stateCopy = { ...user };
    stateCopy[e.target.name] = e.target.value;
    setUser(stateCopy);
  };

  const handleSave = () => {
    const userObj = {
      id: user.id,
      name: user.name,
      email: user.email,
      bio: user.bio,
      isAdmin: user.isAdmin,
      image: imageUrl,
    };

    editUser(userObj).then(() => {
      navigate(`/profile/${userId}`);
    });
  };

  return (
    <div className="form-container">
      <Form>
        <h1>Edit Profile</h1>
        <FormGroup>
          <Row>
            <Col>
              <Label for="userName">Name</Label>
              <Input
                id="userName"
                name="name"
                type="text"
                value={user?.name}
                required
                autoComplete="name"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Label for="userEmail">Email</Label>
              <Input
                id="userEmail"
                name="email"
                type="text"
                value={user?.email}
                required
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Label for="bio">About Me</Label>
          <Input
            id="bio"
            name="bio"
            type="textarea"
            value={user?.bio}
            required
            onChange={handleInputChange}
          />
        </FormGroup>
        <UploadWidget
          user={user}
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
        />
        <Button id="save-profile" onClick={handleSave}>
          Save Changes
        </Button>
      </Form>
    </div>
  );
};
