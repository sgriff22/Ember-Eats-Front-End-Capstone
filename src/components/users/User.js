import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { editUser, getAllUsers } from "../../services/userService";

export const User = ({ user, setUsers }) => {
  const handleBlockToggle = () => {
    const updateUser = {
      ...user,
      isBlocked: !user.isBlocked,
    };
    editUser(updateUser).then(() => {
      getAllUsers().then((res) => {
        setUsers(res);
      });
    });
  };

  return (
    <Card id="user-card" body color="secondary">
      <Link to={`/profile/${user.id}`}>
        <div id="user-image-container">
          <img alt="Sample" src={user.image} />
        </div>
        <CardBody>
          <CardSubtitle className="mb-2 text-muted" tag="h5">
            Id#: {user.id}
          </CardSubtitle>
          <CardTitle tag="h3">{user.name}</CardTitle>
          <CardText>Email: {user.email}</CardText>
        </CardBody>
      </Link>
      <Button color="light" onClick={handleBlockToggle}>
        {user.isBlocked ? "Unblock User" : "Block User"}
      </Button>
    </Card>
  );
};
