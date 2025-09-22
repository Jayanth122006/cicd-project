import React from "react";
import styled from "styled-components";

// --- Centralized Color Palette for Consistency ---
const Colors = {
  PrimaryAccent: "#707070", // Muted gray accent
  SecondaryAccent: "#555555", // Darker gray for subtle effects
  DarkestBackground: "#0A0A0A", // Deepest background
  DarkBackground: "#121212", // Main background for sections
  CardBackground: "#1A1A1A", // Slightly lighter for cards/elements
  LightText: "#E0E0E0", // Standard readable text
  LighterText: "#F0F0F0", // Pure white for headings
  IconColor: "#E0E0E0", // Muted white for icons
  ShadowColor: "rgba(0, 0, 0, 0.7)", // Deep shadow for depth
  SubtleBorder: "rgba(255, 255, 255, 0.08)", // Very subtle border
  AccentGradient: "linear-gradient(45deg, #707070, #555555)",
};

// --- Styled Components for Contact Info ---

const ContactInfoContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: ${Colors.DarkBackground};
  color: ${Colors.LightText};
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  position: relative;
  overflow: hidden;

  /* Grid-like background pattern */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.02) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 0;
    pointer-events: none;
  }
`;

const InfoCard = styled.div`
  background-color: ${Colors.CardBackground};
  padding: 3.5rem 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 50px ${Colors.ShadowColor};
  border: 1px solid ${Colors.SubtleBorder};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    max-width: 500px;
  }
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    max-width: 90%;
  }
`;

const InfoTitle = styled.h2`
  font-size: 2.8rem;
  color: ${Colors.LighterText};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &::after {
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
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.15rem;
  color: ${Colors.LightText};
  background-color: ${Colors.DarkestBackground};
  padding: 1rem 1.2rem;
  border-radius: 10px;
  border: 1px solid ${Colors.SubtleBorder};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
    border-color: ${Colors.PrimaryAccent};
  }

  ion-icon {
    font-size: 1.8rem;
    color: ${Colors.PrimaryAccent};
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
    padding: 0.8rem 1rem;
    ion-icon {
      font-size: 1.6rem;
    }
  }
`;

const Contactinfo = () => {
  return (
    <ContactInfoContainer>
      <InfoCard>
        <InfoTitle>Our Contact Info</InfoTitle>
        <InfoItem>
          <ion-icon name="mail-outline"></ion-icon>
          <span>Email : EsportCity@gmail.com</span>
        </InfoItem>
        <InfoItem>
          <ion-icon name="call-outline"></ion-icon>
          <span>Phone : 0000 0000 00</span>
        </InfoItem>
        <InfoItem>
          <ion-icon name="location-outline"></ion-icon>
          <span>Address : vijayavada, guntur</span>
        </InfoItem>
        <InfoItem>
          <ion-icon name="logo-instagram"></ion-icon>
          <span>Instagram : Esport-City</span>
        </InfoItem>
        <InfoItem>
          <ion-icon name="logo-youtube"></ion-icon>
          <span>Youtube : Esports t1</span>
        </InfoItem>
      </InfoCard>
    </ContactInfoContainer>
  );
};

export default Contactinfo;
