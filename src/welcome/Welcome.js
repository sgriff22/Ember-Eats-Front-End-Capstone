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
      <h1>Welcome to EmberEats</h1>
      <h6>Ignite Flavor, One Dutch Oven Recipe at a Time!</h6>
    </div>
  );
};
