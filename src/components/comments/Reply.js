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
    <Row key={reply.id} id="reply-row">
      <Col sm={2} id="reply-img-col">
        <img src={reply.user?.image} alt={reply.user?.name} />
      </Col>
      <Col sm={10}>
        <p id="reply-name">
          {reply.user?.name} <span>{formatDate(reply.date)}</span>
        </p>
        <div>{reply.text}</div>
        <div>
          {nestedReplies.some((nr) => nr.replyId === reply.id) && (
            <span>
              <Button
                color="primary"
                id={`nested-toggler-${reply.id}`}
                style={{
                  paddingBottom: "0",
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
          {(currentUser.isAdmin === true ||
            currentUser.id === reply.userId) && (
            <EditToggle
              setReplies={setReplies}
              reply={reply}
              currentUser={currentUser}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};
