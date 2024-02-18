import { Button, Col, Row } from "reactstrap";
import { ReplyToggle } from "./ReplyToggle";
import { useState } from "react";
import { EditToggle } from "./EditToggle";

export const Comment = ({
  comment,
  formatDate,
  replies,
  currentUser,
  setReplies,
  setComments,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Row id="comment-row">
      <Col sm={2} id="comment-img-col">
        <img src={comment.user?.image} alt={comment.user?.name} />
      </Col>
      <Col sm={10}>
        <p id="comment-name">
          {comment.user?.name} <span>{formatDate(comment.date)}</span>
        </p>
        <div>{comment.text}</div>
        {replies.some((reply) => reply.commentId === comment.id) && (
          <span>
            <Button
              color="primary"
              id={`toggler-${comment.id}`}
              style={{
                paddingBottom: "0",
                backgroundColor: "#F1F1F1",
                color: "orange",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={handleToggle}
            >
              {isToggled ? "Hide Replies ⏶" : "View Replies ⏷ "}
            </Button>
          </span>
        )}
        <ReplyToggle
          currentUser={currentUser}
          comment={comment}
          setReplies={setReplies}
        />
        {(currentUser.isAdmin === true ||
          currentUser.id === comment.userId) && (
          <EditToggle
            comment={comment}
            setComments={setComments}
            currentUser={currentUser}
          />
        )}
      </Col>
    </Row>
  );
};
