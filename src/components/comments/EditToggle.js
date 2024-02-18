import React, { useState } from "react";
import { Collapse, Button, CardBody, Card, Input } from "reactstrap";
import {
  editComment,
  editReply,
  getAllCommentsByRecipeId,
  getAllReplies,
} from "../../services/commentsService";

export const EditToggle = ({ comment, setReplies, reply, setComments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedText, setEditedText] = useState(
    comment?.text || reply?.text || ""
  );

  const toggle = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSubmit = () => {
    if (comment) {
      const commentObj = {
        id: comment.id,
        userId: comment.userId,
        recipeId: comment.recipeId,
        text: editedText,
        date: comment.date,
      };
      editComment(commentObj).then((res) => {
        getAllCommentsByRecipeId(res.recipeId).then((r) => {
          setComments(r);
          setIsOpen(false);
        });
      });
    } else {
      const replyObj = {
        id: reply.id,
        userId: reply.userId,
        commentId: reply.commentId,
        replyId: reply.replyId,
        text: editedText,
        date: reply.date,
      };
      editReply(replyObj).then((res) => {
        getAllReplies().then((res) => {
          setReplies(res);
          setIsOpen(false);
        });
      });
    }
  };

  return (
    <React.StrictMode>
      <Button
        color="primary"
        onClick={toggle}
        style={{
          paddingBottom: "0",
          backgroundColor: "#F1F1F1",
          color: "orange",
          border: "none",
          fontWeight: "bold",
        }}
      >
        Edit
      </Button>
      <Collapse isOpen={isOpen}>
        <Card id="edit-card">
          <CardBody>
            <Input
              id="edit-input"
              type="textarea"
              name="reply"
              value={editedText}
              onChange={handleInputChange}
              style={{ height: "80px" }}
            />
            <Button id="comment-btn" onClick={handleSubmit}>
              Submit
            </Button>
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
};
