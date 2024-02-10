import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { editUser, getUserById } from "../../services/userService";
import { useNavigate, useParams } from "react-router-dom";
import { UploadWidget } from "../UploadWidget";

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
    <div>
      <Form>
        <h1>Edit Profile</h1>
        <FormGroup>
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
        <FormGroup>
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
        </FormGroup>
        <UploadWidget
          user={user}
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
        />
        <Button onClick={handleSave}>Save</Button>
      </Form>
    </div>
  );
};
