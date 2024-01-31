import React from "react";

export const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: "url(images/landscape.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "800px",
      }}
    >
      <h1>Welcome to</h1>
      <img
        src={"/images/logo-white-transparent.png"}
        alt="EmberEats logo"
        style={{
          height: "300px",
        }}
      />
    </div>
  );
};
