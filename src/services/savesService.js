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

export const getSavesByUserId = (userId) => {
  return fetch(
    `http://localhost:8088/saves?userId=${userId}&_expand=recipe`
  ).then((res) => res.json());
};

export const deleteSave = (saveId) => {
  return fetch(`http://localhost:8088/saves/${saveId}`, {
    method: "DELETE",
  });
};
