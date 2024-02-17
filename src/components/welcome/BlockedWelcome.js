import logoImage from "../../assets/logo/logo-black-transparent.png";

export const BlockedWelcome = () => {
  return (
    <div className="blocked-welcome">
      <img src={logoImage} alt="EmberEats logo" />
      <h1>Your EmberEats Account Has Been Blocked</h1>
      <h2>To resolve this matter, please contact Admin via Email:</h2>
      <p>admin@embereats.com</p>
    </div>
  );
};
