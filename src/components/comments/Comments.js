import { useEffect, useState } from "react";
import {
  addNewComment,
  getAllCommentsByRecipeId,
  getAllReplies,
} from "../../services/commentsService";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

export const Comments = ({ recipe, currentUser }) => {
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

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

  const handleInputChange = (e) => {
    setNewCommentText(e.target.value);
  };

  const handleSubmit = async () => {
    const commentObj = {
      userId: currentUser.id,
      recipeId: recipe.id,
      text: newCommentText,
      date: new Date(),
    };

    await addNewComment(commentObj).then(() => {
      getAllCommentsByRecipeId(recipe.id).then((res) => {
        setComments(res);
      });
      setNewCommentText("");
    });
  };

  return (
    <Container style={{ border: "gray solid 1px" }}>
      <h3>Comments</h3>
      <Form style={{ marginLeft: "0", width: "30%", padding: "10px" }}>
        <FormGroup>
          <Input
            name="comment"
            placeholder="Leave a comment"
            type="textarea"
            style={{ height: "100px" }}
            value={newCommentText}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      {comments.map((comment) => (
        <div key={comment.id}>
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
                style={{ width: "20px" }}
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
            </Col>
          </Row>
          {replies
            .filter((reply) => reply.commentId === comment.id)
            .map((reply) => (
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
                    src={reply.user.image}
                    alt={reply.user.name}
                    style={{ width: "20px" }}
                  />
                </Col>
                <Col sm={9}>
                  <p style={{ fontWeight: "bold", marginBottom: "2px" }}>
                    {reply.user.name}{" "}
                    <span style={{ fontWeight: "400", marginLeft: "10px" }}>
                      {formatDate(reply.date)}
                    </span>
                  </p>
                  <div>{reply.text}</div>
                </Col>
              </Row>
            ))}
        </div>
      ))}
    </Container>
  );
};
