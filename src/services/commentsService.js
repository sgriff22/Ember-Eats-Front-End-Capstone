export const getAllCommentsByRecipeId = (recipeId) => {
  return fetch(
    `http://localhost:8088/comments?recipeId=${recipeId}&_expand=user`
  ).then((res) => res.json());
};

export const getAllReplies = () => {
  return fetch(
    `http://localhost:8088/replies?_expand=user&_expand=comment`
  ).then((res) => res.json());
};

export const addNewComment = (comment) => {
  return fetch("http://localhost:8088/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  }).then((res) => res.json());
};

export const addNewReply = (reply) => {
  return fetch("http://localhost:8088/replies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reply),
  }).then((res) => res.json());
};

export const editComment = (comment) => {
  return fetch(`http://localhost:8088/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  }).then((res) => res.json());
};

export const editReply = (reply) => {
  return fetch(`http://localhost:8088/replies/${reply.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reply),
  }).then((res) => res.json());
};
