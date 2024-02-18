import { useEffect, useState } from "react";
import {
  addNewComment,
  getAllCommentsByRecipeId,
  getAllReplies,
} from "../../services/commentsService";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  UncontrolledCollapse,
} from "reactstrap";
import { Comment } from "./Comment";
import { RenderReplies } from "./RenderReplies";
import "./Comments.css";

export const CommentList = ({ recipe, currentUser }) => {
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [nestedReplies, setNestedReplies] = useState([]);

  // Function to format date string to a readable format
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    getAllCommentsByRecipeId(recipe.id).then((res) => {
      setComments(res);
    });
  }, [recipe]);

  useEffect(() => {
    getAllReplies().then((res) => {
      setReplies(res);
    });
  }, []);

  //Filter the replies for the ones that are replies of another reply and not a comment
  useEffect(() => {
    const replyFilter = replies.filter((reply) => reply.replyId > 0);
    setNestedReplies(replyFilter);
  }, [replies]);

  const handleInputChange = (e) => {
    setNewCommentText(e.target.value);
  };

  const handleSubmit = () => {
    const commentObj = {
      userId: currentUser.id,
      recipeId: recipe.id,
      text: newCommentText,
      date: new Date(),
    };

    addNewComment(commentObj).then(() => {
      getAllCommentsByRecipeId(recipe.id).then((res) => {
        setComments(res);
      });
      setNewCommentText("");
    });
  };

  return (
    <Container className="commentList-container">
      <h3>Comments</h3>
      <Form>
        <FormGroup>
          <Input
            id="comment-textarea"
            name="comment"
            placeholder="Leave a comment"
            type="textarea"
            value={newCommentText}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button id="comment-btn" onClick={handleSubmit}>Submit</Button>
      </Form>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment
            comment={comment}
            formatDate={formatDate}
            replies={replies}
            currentUser={currentUser}
            setReplies={setReplies}
            setComments={setComments}
          />
          {replies.some((reply) => reply.commentId === comment.id) && (
            <div>
              <UncontrolledCollapse toggler={`#toggler-${comment.id}`}>
                <Card style={{ border: "none", backgroundColor: "#F1F1F1" }}>
                  <CardBody>
                    <RenderReplies
                      replies={replies.filter(
                        (reply) => reply.commentId === comment.id
                      )}
                      nestedReplies={nestedReplies}
                      formatDate={formatDate}
                      currentUser={currentUser}
                      setReplies={setReplies}
                    />
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          )}
        </div>
      ))}
    </Container>
  );
};
