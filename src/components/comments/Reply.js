import { Button, Col, Row } from "reactstrap";
import { ReplyToggle } from "./ReplyToggle";
import { useState } from "react";
import { EditToggle } from "./EditToggle";

export const Reply = ({
  reply,
  formatDate,
  nestedReplies,
  currentUser,
  setReplies,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Row
      key={reply.id}
      style={{
        border: "black solid 2px",
        marginBottom: "10px",
        marginLeft: "2%",
        width: "70%",
      }}
    >
      <Col sm={2} offset={1}>
        <img
          src={reply.user?.image}
          alt={reply.user?.name}
          style={{ width: "30px" }}
        />
      </Col>
      <Col sm={9}>
        <p style={{ fontWeight: "bold", marginBottom: "2px" }}>
          {reply.user?.name}{" "}
          <span style={{ fontWeight: "400", marginLeft: "10px" }}>
            {formatDate(reply.date)}
          </span>
        </p>
        <div>{reply.text}</div>
        <div>
          {nestedReplies.some((nr) => nr.replyId === reply.id) && (
            <span>
              <Button
                color="primary"
                id={`nested-toggler-${reply.id}`}
                style={{
                  marginBottom: "1rem",
                  backgroundColor: "#F1F1F1",
                  color: "orange",
                  border: "none",
                  fontWeight: "bold",
                }}
                onClick={handleToggle}
              >
                {isToggled ? "Hide Replies ⏶" : "View Replies ⏷"}
              </Button>
            </span>
          )}
          <ReplyToggle
            currentUser={currentUser}
            setReplies={setReplies}
            reply={reply}
          />
          <EditToggle setReplies={setReplies} reply={reply} />
        </div>
      </Col>
    </Row>
  );
};
