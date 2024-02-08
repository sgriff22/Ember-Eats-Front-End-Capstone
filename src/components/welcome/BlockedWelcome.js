import logoImage from "../../assets/logo/logo-black-transparent.png";

export const BlockedWelcome = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={logoImage}
        alt="EmberEats logo"
        style={{
          width: "10%",
          marginBottom: "15px",
        }}
      />

      <h1>Your EmberEats Account Has Been Blocked</h1>
      <h4>To resolve this matter, please reach out to our support team.</h4>
      <p>
        Contact Admin via Email: <strong>admin@embereats.com</strong>
      </p>
    </div>
  );
};
