import { Button, Col, Row } from "reactstrap";
import { ReplyToggle } from "./ReplyToggle";
import { useState } from "react";

export const Comment = ({ comment, formatDate, replies, currentUser, setReplies }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Row
      style={{
        border: "black solid 2px",
        marginBottom: "10px",
        width: "70%",
      }}
    >
      <Col sm={1}>
        <img
          src={comment.user.image}
          alt={comment.user.name}
          style={{ width: "30px" }}
        />
      </Col>
      <Col sm={10}>
        <p style={{ fontWeight: "bold", marginBottom: "2px" }}>
          {comment.user.name}{" "}
          <span style={{ fontWeight: "400", marginLeft: "10px" }}>
            {formatDate(comment.date)}
          </span>
        </p>
        <div>{comment.text}</div>
        {replies.some((reply) => reply.commentId === comment.id) && (
          <span>
            <Button
              color="primary"
              id={`toggler-${comment.id}`}
              style={{
                marginBottom: "1rem",
                backgroundColor: "#F1F1F1",
                color: "orange",
                border: "none",
                fontWeight: "bold"
              }}
              onClick={handleToggle}
            >
              {isToggled ? "Hide Replies ⏶" : "View Replies ⏷ "}
            </Button>
          </span>
        )}
        <ReplyToggle currentUser={currentUser} comment={comment}  setReplies={setReplies}/>
      </Col>
    </Row>
  );
};
