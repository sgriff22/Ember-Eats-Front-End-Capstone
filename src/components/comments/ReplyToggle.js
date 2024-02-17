import React, { useState } from "react";
import { Collapse, Button, CardBody, Card, Input } from "reactstrap";
import { addNewReply, getAllReplies } from "../../services/commentsService";

export const ReplyToggle = ({ currentUser, comment, setReplies, reply }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [replyText, setReplyText] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleSubmit = () => {
    const replyObj = {
      userId: currentUser.id,
      commentId: 0,
      replyId: 0,
      text: replyText,
      date: new Date(),
    };

    if (
      reply &&
      (reply.replyId === 0 || (reply.replyId && reply.replyId >= 1))
    ) {
      replyObj.replyId = reply.id;
    } else {
      replyObj.commentId = comment.id;
    }

    addNewReply(replyObj).then(() => {
      getAllReplies().then((res) => {
        setReplies(res);
        setReplyText("");
        setIsOpen(false);
      });
    });
  };

  return (
    <React.StrictMode>
      <Button
        color="primary"
        onClick={toggle}
        style={{
          marginBottom: "1rem",
          backgroundColor: "#F1F1F1",
          color: "orange",
          border: "none",
          fontWeight: "bold",
        }}
      >
        Reply
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Input
              type="textarea"
              name="reply"
              value={replyText}
              onChange={handleInputChange}
              style={{ height: "80px" }}
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
};
