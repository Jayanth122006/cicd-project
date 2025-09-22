import React from "react";
import styled from "styled-components";
import Div2bgimg from "../assets/div2bgimg.png";

// --- SVG Components ---
const AccentUnderline = () => (
  <svg height="12" style={{ width: "200px", marginBottom: "20px" }}>
    <path d="M0 6 L200 6" stroke="#444444" strokeWidth="3" /> {/* Dark gray */}
    <path
      d="M20 9 L180 9"
      stroke="#222222" // Almost black
      strokeWidth="2"
      transform="skewX(-15)"
    />
  </svg>
);

// --- Main Gaming Brainstorming Component ---
const StrategySession = () => {
  // --- Styles ---

  const containerStyle = {
    position: "relative",
    color: "#FFFFFF",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    padding: "2rem",
  };

  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0)", // Dark overlay
    zIndex: 1,
  };

  const textContentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "auto",
  };

  // --- Adjusted responsive styles using media queries ---
  const headingStyle = {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "2rem",
    fontWeight: "900",
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 0px #555555, 4px 4px 0px #000000",
    marginBottom: "0.5rem",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      fontSize: "0.3rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.3rem",
      letterSpacing: "0px",
    },
  };

  const paragraphStyle = {
    color: "#DDDDDD", // Light grey for readability
    fontFamily: "'Inter', sans-serif",
    fontSize: "1rem",
    lineHeight: "1.7",
    marginBottom: "2rem",
    maxWidth: "650px",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      fontSize: "0.5rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.5rem",
    },
  };

  const objectivesContainerStyle = {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const objectiveChipBaseStyle = {
    padding: "0.8rem 1.5rem",
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "0.8rem",
    color: "#FFFFFF",
    width: "fit-content",
    border: "2px solid",
    clipPath:
      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    fontWeight: "bold",
    // Responsive adjustments
    "@media (max-width: 480px)": {
      fontSize: "0.9rem",
      padding: "0.6rem 1rem",
    },
  };

  const objectiveChip1Style = {
    ...objectiveChipBaseStyle,
    backgroundColor: "rgba(50, 50, 50, 0.6)", // Semi-transparent dark gray
    borderColor: "#444444", // Dark grey border
  };

  const objectiveChip2Style = {
    ...objectiveChipBaseStyle,
    backgroundColor: "rgba(30, 30, 30, 0.6)", // Even darker gray
    borderColor: "#222222", // Almost black
  };

  return (
    <div style={containerStyle}>
      {/* Image Background and Overlay */}
      <img
        style={{
          ...videoStyle,
          objectFit: "cover",
        }}
        src={Div2bgimg}
        alt="Background"
      />
      <div style={overlayStyle}></div>

      {/* Text Content Section */}
      <div style={textContentStyle}>
        <h1 style={headingStyle}>The City Of Guns</h1>
        <AccentUnderline />
        <p style={paragraphStyle}>
          Esports City – The City of Guns is your gateway to the world of
          competitive gaming. Our mission is simple: to unite gamers from every
          corner of the globe under one digital skyline. From intense
          multiplayer battles to the latest esports news, we provide the
          platform, the tools, and the community to level up your game. This is
          the city where skill meets strategy, passion drives performance, and
          every gamer can make their mark. Join us, dominate the arena, and be
          part of the city that never sleeps.
        </p>

        <div style={objectivesContainerStyle}>
          <div style={objectiveChip1Style}>Mission: Dominate</div>
          <div style={objectiveChip2Style}>Target: Flawless Victory</div>
        </div>
      </div>
    </div>
  );
};

export default StrategySession;
