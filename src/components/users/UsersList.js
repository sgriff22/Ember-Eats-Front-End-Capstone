import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import { User } from "./User";
import { Col, Container, Input, Row } from "reactstrap";
import "./Users.css";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  useEffect(() => {
    if (search) {
      const foundUsers = users.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredUsers(foundUsers);
    } else {
      setFilteredUsers(users);
    }
  }, [users, search]);

  return (
    <div className="users-container">
      <h1>Users</h1>
      <Input
        className="mb-5"
        placeholder="Search for user"
        name="search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <Container>
        <Row>
          {filteredUsers.map((user) => {
            return (
              <Col key={user.id}>
                <User user={user} setUsers={setUsers} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
