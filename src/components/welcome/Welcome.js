import React from "react";
import "./Welcome.css";
import logoImage from "../../assets/logo/logo-white-transparent.png";

export const Welcome = () => {
  return (
    <div id="welcome-container">
      <div id="welcome">
        <h1>Welcome to</h1>
        <img src={logoImage} alt="EmberEats logo" />
      </div>
    </div>
  );
};
