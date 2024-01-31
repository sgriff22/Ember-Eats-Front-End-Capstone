export const getAllSaves = () => {
  return fetch("http://localhost:8088/saves").then((res) => res.json());
};

export const createSaveRecipe = (save) => {
  return fetch("http://localhost:8088/saves", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(save),
  });
};
