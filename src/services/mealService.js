export const getAllMeals = () => {
  return fetch("http://localhost:8088/meals").then((res) => res.json());
};
