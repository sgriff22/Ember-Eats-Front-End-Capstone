import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import { User } from "./User";
import { Col, Container, Input, Row } from "reactstrap";

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
    <div>
      <h1>Users</h1>
      <div>
        <Input
          className="mb-4"
          placeholder="Search for user"
          style={{ width: "20%" }}
          name="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <Container>
        <Row>
          {filteredUsers.map((user) => {
            return (
              <Col key={user.id}>
                <User user={user} setUsers={setUsers}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
