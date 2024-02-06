export const getRatingsByRecipeId = (recipeId) => {
  return fetch(
    `http://localhost:8088/ratings?recipeId=${recipeId}&_expand=recipe`
  ).then((res) => res.json());
};

export const addNewRating = (rating) => {
  return fetch("http://localhost:8088/ratings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rating),
  }).then((res) => res.json());
};

export const editRating = (rating) => {
  return fetch(`http://localhost:8088/ratings/${rating.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rating),
  });
};