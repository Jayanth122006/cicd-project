import React from "react";
import Freefire from "../assets/sportsPageImgs/FreeFire.svg";
import Fortnite from "../assets/sportsPageImgs/fortnite.svg";
import Pubg from "../assets/sportsPageImgs/Pubg.svg";
import valorant from "../assets/sportsPageImgs/Valorant.svg";
import cod from "../assets/sportsPageImgs/cod.svg";
import asphalt from "../assets/sportsPageImgs/Asphalt.svg";
import registerIcon from "../assets/sportsPageImgs/esportlogo.png";

import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const games = [
  {
    name: "Fortnite",
    background: Fortnite,
    description:
      "Battle Royale and Zero Build modes with thrilling action. Compete against others in this last-man-standing game.",
    registrations: "2.8k",
  },
  {
    name: "Free Fire",
    background: Freefire,
    description:
      "A fast-paced mobile battle royale experience with a huge player base. Strategy and survival are key.",
    registrations: "1.5k",
  },
  {
    name: "PUBG",
    background: Pubg,
    description:
      "The classic PC and console battle royale with realistic gunplay. A true test of tactical skills.",
    registrations: "3.1k", // <-- Corrected typo here
  },
  {
    name: "Valorant",
    background: valorant,
    description:
      "A tactical 5v5 character-based shooter where precision and strategy are everything. Teamwork is crucial for victory.",
    registrations: "4.2k",
  },
  {
    name: "Call of Duty",
    background: cod,
    description:
      "The iconic first-person shooter series with a variety of game modes. Fast reflexes and sharp aim are rewarded.",
    registrations: "2.5k",
  },
  {
    name: "Asphalt 9",
    background: asphalt,
    description:
      "Unlock your dream cars, master the tracks, and race to victory",
    registrations: "1.9k",
  },
];

const Sports = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/auth/signup");
  };
  return (
    <div className="main-container">
      <style>
        {`
        /* --- General and Typography --- */
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .main-container {
          background-color: #000000;
          color: #f8f8f8;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .content-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 6rem 1rem;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        /* --- Header Section --- */
        .section-header {
          font-size: 1.3rem;
          margin-top: 2.5rem;
          font-weight: 800;
          margin-bottom: 3rem;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          line-height: 1.25;
        }

        .header-text {
          background: linear-gradient(to right, #ffffff, #cccccc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header-underline {
          margin: 0 auto;
          height: 0.25rem;
          width: 6rem;
          margin-top: 1rem;
          background-color: #555555;
          border-radius: 9999px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        /* --- Card Grid --- */
        .game-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          max-width: 72rem;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .game-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .game-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* --- Individual Card --- */
        .game-card {
          background-color: #111111;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
          transition: all 0.3s ease-in-out;
          transform: translateY(0);
        }
        .game-card:hover {
          transform: translateY(-0.5rem);
          box-shadow: 0 15px 45px rgba(255, 255, 255, 0.15);
        }

        /* --- Card Background --- */
        .card-background {
          height: 16rem;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .card-background::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
        }

        /* --- Card Content --- */
        .card-content {
          padding: 1.5rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f8f8f8;
          margin-bottom: 0.5rem;
        }

        .card-description {
          font-size: 0.9rem;
          color: #cccccc;
          line-height: 1.4;
          margin-bottom: 1.5rem;
          min-height: 2.8rem;
        }

        /* --- Card Actions --- */
        .card-actions {
          padding: 2rem;
          text-align: center;
          background-color: #000000;
        }

        .button-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .register-button {
          width: 100%;
          padding: 1rem;
          background-color: #333333;
          border-radius: 0.75rem;
          color: white;
          font-weight: 700;
          font-size: 1.125rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          border: none;
          
          /* Existing flex styles for centering and gap */
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .register-button:hover {
          background-color: #555555;
          transform: scale(1.05);
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.7);
        }

        .register-button img {
            width: 1.25rem; /* Adjust size as needed */
            height: 1.25rem; /* Adjust size as needed */
            filter: invert(1); /* Optional: if your icon is dark and you want it white */
        }

        .registrations-button {
          width: 100%;
          padding: 0.75rem;
          background-color: #222222;
          border-radius: 0.75rem;
          color: #999999;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid #444444;
        }
      `}
      </style>

      <div className="content-wrapper">
        <h1 className="section-header">
          <span className="header-text">Register Now</span>
          <div className="header-underline"></div>
        </h1>

        <div className="game-grid">
          {games.map((game, index) => (
            <div key={index} className="game-card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${game.background})` }}
              ></div>
              <div className="card-content">
                <h3 className="card-title">{game.name}</h3>
                <p className="card-description">{game.description}</p>
              </div>
              <div className="card-actions">
                <div className="button-group">
                  <button
                    className="register-button"
                    onClick={handleRegisterClick}
                  >
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "1.8rem",
                        height: "1.8rem",
                      }}
                      src={registerIcon}
                      alt="Register Icon"
                    />
                    Register Now
                  </button>
                  <div className="registrations-button">
                    {game.registrations} Registrations
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sports;
