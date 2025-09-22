import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// --- Styled Components ---

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #aaaaaa;
  padding: 6rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const FooterHeader = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cccccc;
  transition: color 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  color: #666666;
  margin-top: 2rem;
`;

// --- React Component ---

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <ContentWrapper>
        <FooterHeader>Get in touch with us</FooterHeader>
        <SocialLinks>
          <SocialLink href="#" target="_blank">
            <SocialIcon icon={faInstagram} />
            Instagram
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <SocialIcon icon={faFacebookF} />
            Facebook
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <SocialIcon icon={faYoutube} />
            Youtube
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <SocialIcon icon={faLinkedin} />
            Linkedin
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <SocialIcon icon={faEnvelope} />
            Email
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {currentYear} Esports-T1.com. All rights reserved.
        </Copyright>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
