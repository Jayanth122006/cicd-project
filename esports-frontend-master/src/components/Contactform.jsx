import React from "react";
import styled from "styled-components";

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
  AccentGradient: "linear-gradient(45deg, #707070, #555555)",
};

// --- Styled Components for Contact Form ---

const FormContainer = styled.div`
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

  /* Subtle background pattern */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.01) 10px,
      /* Reduced opacity for more subtlety */ rgba(255, 255, 255, 0.01) 20px
    );
    z-index: 0;
    pointer-events: none;
  }
`;

const StyledForm = styled.form`
  background-color: ${Colors.CardBackground};
  padding: 3.5rem 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 50px ${Colors.ShadowColor};
  border: 1px solid ${Colors.SubtleBorder};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    max-width: 400px;
  }
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    max-width: 90%;
  }
`;

const FormTitle = styled.h2`
  font-size: 1rem;
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

const StyledInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem;
  background-color: ${Colors.InputBackground};
  border: 1px solid ${Colors.SubtleBorder};
  border-radius: 8px;
  color: ${Colors.LightText};
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    color: ${Colors.PlaceholderText};
    opacity: 0.8;
  }

  &:focus {
    border-color: ${Colors.PrimaryAccent};
    box-shadow: 0 0 0 3px ${Colors.PrimaryAccent}30;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem 1.5rem;
  background-color: ${Colors.InputBackground};
  border: 1px solid ${Colors.SubtleBorder};
  border-radius: 8px;
  color: ${Colors.LightText};
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    color: ${Colors.PlaceholderText};
    opacity: 0.8;
  }

  &:focus {
    border-color: ${Colors.PrimaryAccent};
    box-shadow: 0 0 0 3px ${Colors.PrimaryAccent}30;
  }
`;

const SubmitButton = styled.button`
  background: ${Colors.PrimaryAccent};
  color: ${Colors.LighterText};
  padding: 1rem 2.5rem;
  border: 2px solid ${Colors.PrimaryAccent};
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

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    transform: translateY(-3px) scale(1.01);
    background: ${Colors.SecondaryAccent};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }
`;

const Contactform = () => {
  return (
    <FormContainer>
      <StyledForm action="">
        <FormTitle>Send Us a Message</FormTitle>
        <StyledInput type="text" placeholder="Your Name" />
        <StyledInput type="email" placeholder="Your Email" />
        <StyledTextArea placeholder="Your Message" />
        <SubmitButton type="submit">Send</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Contactform;
