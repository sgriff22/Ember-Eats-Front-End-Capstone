export const getAllRecipes = () => {
  return fetch("http://localhost:8088/recipes").then((res) => res.json());
};
