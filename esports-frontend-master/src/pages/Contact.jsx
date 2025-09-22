import React, { useState } from "react";

// --- Centralized Color Palette for Consistency ---
const Colors = {
  PrimaryAccent: "#707070", // Muted gray accent
  SecondaryAccent: "#555555", // Darker gray for subtle effects
  DarkestBackground: "#0A0A0A", // Deepest background
  DarkBackground: "#121212", // Main background for sections
  CardBackground: "#1A1A1A", // Slightly lighter for cards/elements
  InputBackground: "#222222", // Darker background for inputs
  LightText: "#E0E0E0", // Standard readable text
  LighterText: "#F0F0F0", // Pure white for headings
  PlaceholderText: "#888888", // Soft placeholder text
  ShadowColor: "rgba(0, 0, 0, 0.7)", // Deep shadow for depth
  SubtleBorder: "rgba(255, 255, 255, 0.08)", // Very subtle border
};

// --- Contact Info Component ---
const ContactInfoComponent = () => (
  <div className="info-card">
    <h2 className="info-title">Our Contact Info</h2>
    <div className="info-item">
      <ion-icon name="mail-outline"></ion-icon>
      <span>Email : Esportstier1.official@gmail.com</span>
    </div>
    <div className="info-item">
      <ion-icon name="call-outline"></ion-icon>
      <span>Phone : 92 8484 1111</span>
    </div>
    <div className="info-item">
      <ion-icon name="location-outline"></ion-icon>
      <span>Address : xyz 32-3-31 Vizag, AP</span>
    </div>
    <div className="info-item">
      <ion-icon name="logo-instagram"></ion-icon>
      <span>Instagram : Esports-t1.official</span>
    </div>
    <div className="info-item">
      <ion-icon name="logo-youtube"></ion-icon>
      <span>Youtube : Esports t1</span>
    </div>
  </div>
);

// --- Contact Form Component ---
const ContactFormComponent = () => {
  return (
    <form className="styled-form" action="">
      <h2 className="form-title">Send Us a Message</h2>
      <input className="styled-input" type="text" placeholder="Your Name" />
      <input className="styled-input" type="email" placeholder="Your Email" />
      <textarea className="styled-textarea" placeholder="Your Message" />
      <button className="submit-button" type="submit">
        Send
      </button>
    </form>
  );
};

// --- Unified Contact Component ---
const App = () => {
  const [modalContent, setModalContent] = useState(null);

  const renderModalContent = () => {
    if (modalContent === "form") {
      return <ContactFormComponent />;
    } else if (modalContent === "info") {
      return <ContactInfoComponent />;
    }
    return null;
  };

  return (
    <div className="contact-page">
      <style>
        {`
          @keyframes backgroundPulse {
            0% { transform: scale(1); opacity: 0.1; }
            100% { transform: scale(1.05); opacity: 0.15; }
          }
          .contact-page {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 8rem 2rem 4rem 2rem;
            background: ${Colors.DarkBackground};
            color: ${Colors.LightText};
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Arial, sans-serif;
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
          }
          .contact-page::before {
            content: "";
            position: absolute;
            top: -10%;
            left: -10%;
            width: 120%;
            height: 120%;
            background: radial-gradient(
                circle at 15% 15%,
                ${Colors.PrimaryAccent}10,
                transparent 40%
              ),
              radial-gradient(
                circle at 85% 85%,
                ${Colors.SecondaryAccent}10,
                transparent 40%
              );
            z-index: 0;
            pointer-events: none;
            animation: backgroundPulse 15s infinite alternate ease-in-out;
          }
          @media (max-width: 768px) {
            .contact-page {
              padding: 6rem 1rem 3rem 1rem;
            }
          }

          .contact-title {
            font-size: 2.5rem;
            color: ${Colors.LighterText};
            font-weight: 900;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 3rem;
            position: relative;
            z-index: 1;
            text-shadow: 0 0 10px ${Colors.PrimaryAccent}30;
          }
          .contact-title::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -15px;
            transform: translateX(-50%);
            width: 120px;
            height: 6px;
            background: ${Colors.PrimaryAccent};
            border-radius: 3px;
            box-shadow: 0 0 10px ${Colors.PrimaryAccent}70;
          }
          @media (max-width: 768px) {
            .contact-title {
              font-size: 1rem;
              margin-bottom: 2.5rem;
            }
            .contact-title::after {
              width: 90px;
              height: 4px;
            }
          }
          @media (max-width: 480px) {
            .contact-title {
              font-size: 1rem;
            }
          }
          
          .button-container {
            display: flex;
            gap: 2rem;
            z-index: 1;
          }
          @media (max-width: 480px) {
            .button-container {
              flex-direction: column;
              gap: 1.5rem;
              width: 80%;
            }
          }

          .styled-button {
            background: ${Colors.CardBackground};
            color: ${Colors.LighterText};
            padding: 1.2rem 2.8rem;
            border: 2px solid ${Colors.PrimaryAccent};
            border-radius: 10px;
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease-in-out;
            outline: none;
          }
          .styled-button:hover {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
            transform: translateY(-5px) scale(1.02);
            border-color: ${Colors.LighterText};
          }
          .styled-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          }
          @media (max-width: 768px) {
            .styled-button {
              padding: 1rem 2rem;
              font-size: 0.8rem;
            }
          }
          @media (max-width: 480px) {
            .styled-button {
              width: 100%;
              padding: 1rem 1.5rem;
              font-size: 0.8rem;
            }
          }

          .popup-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }

          .popup-content-wrapper {
            margin-top: 4rem;
            border-radius: 20px;
            box-shadow: 0 20px 50px ${Colors.ShadowColor};
            border: 1px solid ${Colors.SubtleBorder};
            max-width: 90%;
            width: 600px; /* Set a max-width for the popup */
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            overflow: auto;
            max-height: 90vh;
          }

          .close-button {
            background-color: ${Colors.LightText};
            color: ${Colors.DarkBackground};
            font-size: 1rem;
            padding: 0.7rem 1.5rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s, color 0.2s;
            margin-top: 1.5rem;
            text-transform: uppercase;
            font-weight: 700;
          }
          .close-button:hover {
            background-color: #ffffff;
          }

          .info-card, .styled-form {
            background-color: ${Colors.CardBackground};
            padding: 3.5rem 3rem;
            border-radius: 20px;
            box-shadow: 0 20px 50px ${Colors.ShadowColor};
            border: 1px solid ${Colors.SubtleBorder};
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
            position: relative;
            z-index: 1;
          }
          @media (max-width: 768px) {
            .info-card, .styled-form {
              padding: 2.5rem 2rem;
            }
          }
          @media (max-width: 480px) {
            .info-card, .styled-form {
              padding: 2rem 1.5rem;
            }
          }

          .info-title, .form-title {
            font-size: 1.4rem;
            color: ${Colors.LighterText};
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 2rem;
            text-align: center;
            position: relative;
          }
          .info-title::after, .form-title::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -10px;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: ${Colors.PrimaryAccent};
            border-radius: 2px;
            box-shadow: 0 0 10px ${Colors.PrimaryAccent}50;
          }
          @media (max-width: 768px) {
            .info-title, .form-title {
              font-size: 1rem;
              margin-bottom: 1.5rem;
            }
          }

          .info-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1rem;
            color: ${Colors.LightText};
            background-color: ${Colors.DarkestBackground};
            padding: 1rem 1.2rem;
            border-radius: 10px;
            border: 1px solid ${Colors.SubtleBorder};
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .info-item:hover {
            transform: translateX(5px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
            border-color: ${Colors.PrimaryAccent};
          }
          .info-item ion-icon {
            font-size: 1rem;
            color: ${Colors.PrimaryAccent};
            flex-shrink: 0;
          }
          @media (max-width: 768px) {
            .info-item {
              font-size: 0.9rem;
              padding: 0.8rem 1rem;
            }
            .info-item ion-icon {
              font-size: 0.8rem;
            }
          }
          
          .styled-input, .styled-textarea {
            width: 100%;
            padding: 1rem 1.5rem;
            background-color: ${Colors.InputBackground};
            border: 1px solid ${Colors.SubtleBorder};
            border-radius: 8px;
            color: ${Colors.LightText};
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }
          .styled-input::placeholder, .styled-textarea::placeholder {
            color: ${Colors.PlaceholderText};
            opacity: 0.8;
          }
          .styled-input:focus, .styled-textarea:focus {
            border-color: ${Colors.PrimaryAccent};
            box-shadow: 0 0 0 3px ${Colors.PrimaryAccent}30;
          }
          .styled-textarea {
            resize: vertical;
            min-height: 120px;
          }

          .submit-button {
            background: #FFFFFF;
            color: ${Colors.DarkBackground};
            padding: 0.7rem 2.5rem;
            border: 2px solid #FFFFFF;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease-in-out;
            outline: none;
            margin-top: 1rem;
          }
          .submit-button:hover {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
            transform: translateY(-3px) scale(1.01);
            background: ${Colors.PrimaryAccent};
            color: ${Colors.LighterText};
          }
          .submit-button:active {
            transform: translateY(0);
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      <h2 className="contact-title">Contact Us</h2>
      <div className="button-container">
        <button
          className="styled-button"
          onClick={() => setModalContent("info")}
        >
          Contact Info
        </button>
        <button
          className="styled-button"
          onClick={() => setModalContent("form")}
        >
          Contact Form
        </button>
      </div>

      {modalContent && (
        <div className="popup-modal" onClick={() => setModalContent(null)}>
          <div
            className="popup-content-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            {renderModalContent()}
            <button
              className="close-button"
              onClick={() => setModalContent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
