import React from "react";
import "./Welcome.css";
import landscapeImage from "../../assets/landscape.jpg";
import logoImage from "../../assets/logo/logo-white-transparent.png";

export const Welcome = () => {
  return (
    <div
      className="welcome-container"
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${landscapeImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          paddingTop: "8%",
        }}
      >
        <div
          style={{
            paddingLeft: "10%",
            width: "90%",
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "5rem",
              fontFamily: "'Amaranth', sans-serif",
              textShadow: "2px 2px 5px gray",
            }}
          >
            Welcome to
          </h1>
          <div>
            <img
              src={logoImage}
              alt="EmberEats logo"
              style={{
                width: "40%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// {/* <div className="website-description">
//   <h2>About EmberEats</h2>
//   <p>
//     Welcome to EmberEats, your culinary haven for outdoor enthusiasts and
//     campfire cooking aficionados! At EmberEats, we believe that every meal
//     has the potential to be an adventure, and what better way to embrace
//     that spirit than with the sizzle of a campfire or the comforting
//     embrace of a Dutch oven? Our platform is dedicated to bringing
//     together a community of passionate individuals who share a love for
//     creating and sharing delicious recipes that are tailor-made for the
//     great outdoors.
//   </p>
//   <h4>What Sets Us Apart:</h4>
//   <ul>
//     <li>
//       <b>Campfire Magic:</b> EmberEats is not just a recipe sharing
//       website; it's a celebration of the art of campfire and Dutch oven
//       cooking. Discover and share recipes that ignite the taste buds and
//       create lasting memories around the warmth of the fire.
//     </li>
//     <li>
//       <b>Create, Share, Explore:</b> Unleash your culinary creativity!
//       Users can seamlessly create and share their own outdoor-inspired
//       recipes while exploring a treasure trove of delicious ideas
//       contributed by fellow outdoor cooking enthusiasts.
//     </li>
//     <li>
//       <b>Your Culinary Sanctuary:</b> EmberEats allows users to curate a
//       personalized list of recipes, whether they've whipped them up
//       themselves or stumbled upon a gem from another member of our vibrant
//       community. Your favorite outdoor recipes, all in one place!
//     </li>
//   </ul>
// </div> */}
