import React, { useState } from "react";
import styled from "styled-components";
import table from "../assets/pointstable.png";
import Freefiretable from "../assets/sportsPageImgs/freefiretable.jpg";
import Freefirenewsimg from "../assets/sportsPageImgs/freefirenewsimg.png";
import Pubgnewsimg from "../assets/sportsPageImgs/pubgnewsimg.png";
import Codnewsimg from "../assets/sportsPageImgs/codnewsbg.png";
import Valorantnewsimg from "../assets/sportsPageImgs/valorantnewsimg.png";
import Asphaltnewsimg from "../assets/sportsPageImgs/Asphalt9newsimg.png";
import Footer from "../components/Footer";

// You will need to add a small icon for the button, e.g., viewIcon.svg
import viewIcon from "../assets/sportsPageImgs/esportlogo.png";

// --- Colors & Common Styles for "Brainstorming" Theme ---
const Colors = {
  PrimaryAccent: "#707070", // A medium gray for subtle accents
  DarkBackground: "#0A0A0A", // A true black base
  CardBackground: "#181818", // Very dark gray for cards
  LightText: "#E0E0E0", // Standard readable text
  LighterText: "#F0F0F0", // Slightly lighter for headings
  ShadowColor: "rgba(0, 0, 0, 0.5)", // Less intense shadow
  SubtleBorder: "rgba(255, 255, 255, 0.08)", // Very subtle border
};

// --- Styled Components ---

const NewsSection = styled.section`
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: ${Colors.DarkBackground};
  color: ${Colors.LightText};
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    gap: 2rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 1.4rem;
  color: ${Colors.LighterText};
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 900;
  margin-top: 4rem;
  margin-bottom: 0rem;
  position: relative;
  text-shadow: 0 0 10px ${Colors.PrimaryAccent};

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 6rem;
    letter-spacing: 3px;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 4rem;
  }
`;

const NewsContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 90%;
  max-width: 1200px;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const NewsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid ${Colors.SubtleBorder};
  background-color: ${Colors.CardBackground};
  padding: 1.5rem;
  box-shadow: 0 5px 20px ${Colors.ShadowColor};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;

  /* Default mobile-first layout: image first, then text */
  flex-direction: column;
  text-align: center;

  /* Layout for larger screens: image always on the left */
  @media (min-width: 993px) {
    flex-direction: row; /* Ensure image is on the left */
    text-align: left;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px ${Colors.ShadowColor};
    border-color: ${Colors.PrimaryAccent};
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const NewsImage = styled.img`
  width: 25rem;
  height: 14rem;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${Colors.PrimaryAccent};
  flex-shrink: 0;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.4);

  @media (max-width: 992px) {
    width: 100%;
    height: 12rem;
  }
  @media (max-width: 480px) {
    height: 10rem;
  }
`;

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  @media (max-width: 992px) {
    align-items: center;
    text-align: center;
  }
`;

const NewsCategory = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: ${Colors.PrimaryAccent};
  border-bottom: 2px solid ${Colors.PrimaryAccent};

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`;

const NewsParagraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${Colors.LightText};

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

// --- New Styled Components for Points Table UI ---
const PointsTableSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
  width: 90%;
  max-width: 1000px;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 3rem;
  }
`;

const PointsTableTitle = styled.h5`
  font-size: 2rem;
  color: ${Colors.LighterText};
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px ${Colors.PrimaryAccent};

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const TableCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TableCard = styled.div`
  background-color: ${Colors.CardBackground};
  border: 1px solid ${Colors.SubtleBorder};
  border-radius: 12px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 5px 25px ${Colors.ShadowColor};
  transition: transform 0.2s ease-out;
  border: 0.2px solid white;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TableCardTitle = styled.h3`
  font-size: 1.8rem;
  color: ${Colors.LighterText};
  margin-bottom: 0.5rem;
`;

const TableCardText = styled.p`
  font-size: 0.95rem;
  color: ${Colors.LightText};
  margin-bottom: 1.5rem;
`;

const ViewButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #8c8c8c;
  }
`;

const ButtonIcon = styled.img`
  width: 2rem;
  height: 2rem;
  filter: invert(1);
`;

// --- New Styled Components for the Pop-up Modal ---
const PopupModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const PopupContent = styled.div`
  background-color: ${Colors.CardBackground};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px ${Colors.ShadowColor};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
`;

const PopupImage = styled.img`
  width: 80vw;
  max-width: 760px;
  height: auto;
  border-radius: 8px;
  display: block;
  border: 1px solid grey;
`;

const CloseButton = styled.button`
  background-color: white;
  color: black;
  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  margin-top: 1.5rem;

  &:hover {
    background-color: #e0e0e0;
    color: #333;
  }
`;

// --- React Component ---

const News = () => {
  const [popupImage, setPopupImage] = useState(null);

  const handleViewTable = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  return (
    <NewsSection>
      <MainTitle>Latest News</MainTitle>
      <NewsContainerWrapper>
        {/* News Card 1 */}
        <NewsCard>
          <NewsImage src={Freefirenewsimg} alt="Free Fire Update" />
          <NewsContent>
            <NewsCategory>Free Fire</NewsCategory>
            <NewsParagraph>
              Garena has started rolling out the latest update for the popular
              game Free Fire Max in India. The OB48 update brings new weapons,
              the MyZone event, and various gameplay improvements. The update
              aims to enhance customisation, balance weapons, and introduce new
              mechanics. Here's everything that's new with the update.
            </NewsParagraph>
          </NewsContent>
        </NewsCard>

        {/* News Card 2 */}
        <NewsCard>
          <NewsImage src={Pubgnewsimg} alt="PUBG Update" />
          <NewsContent>
            <NewsCategory>PUBG</NewsCategory>
            <NewsParagraph>
              Player Unknown Battlegrounds (PUBG) Mobile's much-awaited 3.7
              update is reportedly expected to be rolled out on Friday. The new
              update will host fresh content and improvements. The key element
              of this update is going to be the new theme mode: Golden Dynasty.
              The PUBG Mobile 3.7 update will feature an additional map,
              gameplay enhancements, bug fixes, and more.
            </NewsParagraph>
          </NewsContent>
        </NewsCard>

        {/* News Card 3 */}
        <NewsCard>
          <NewsImage src={Codnewsimg} alt="Call of Duty Update" />
          <NewsContent>
            <NewsCategory>Call of Duty</NewsCategory>
            <NewsParagraph>
              The first March updates for Call of Duty: Black Ops 6 and Warzone
              have been released, introducing numerous bug fixes across both
              titles in the franchise. With the launch of Call of Duty: Black
              Ops 6 and Warzone Season 2 Reloaded, players received a wave of
              new content, events, and gameplay adjustments.
            </NewsParagraph>
          </NewsContent>
        </NewsCard>

        {/* News Card 4 */}
        <NewsCard>
          <NewsImage src={Valorantnewsimg} alt="Fortnite Update" />
          <NewsContent>
            <NewsCategory>Valorant</NewsCategory>
            <NewsParagraph>
              Based on recent Fortnite leaks, the release date and time for the
              first major update v34.10 for Chapter 6 Season 2 have been
              revealed. The next phase of the storyline kicks off on February
              21, 2025. As a result, it comes as no surprise that information
              about dates and times of the update is slowly being added to the
              files. This is subject to change, but it does provide a timeline
              for the community.
            </NewsParagraph>
          </NewsContent>
        </NewsCard>

        {/* News Card 5 */}
        <NewsCard>
          <NewsImage src={Asphaltnewsimg} alt="Valorant Update" />
          <NewsContent>
            <NewsCategory>Asphalt 9</NewsCategory>
            <NewsParagraph>
              The newest patch from Valorant, Patch 10.04, shakes up the game
              for both Agents and gameplay. One of the major highlights is that
              there is a new agent in the Duelist category named Waylay, along
              with reworks for other characters in the form of Clove and
              Deadlock.
            </NewsParagraph>
          </NewsContent>
        </NewsCard>
      </NewsContainerWrapper>

      {/* Points Table Section with Cards and Buttons */}
      <PointsTableSection>
        <PointsTableTitle>Points Tables</PointsTableTitle>
        <TableCardsContainer>
          <TableCard>
            <TableCardTitle>Free Fire</TableCardTitle>
            <TableCardText>
              View the latest point standings for all participating teams in the
              Free Fire Tier-1 tournament.
            </TableCardText>
            <ViewButton onClick={() => handleViewTable(Freefiretable)}>
              <ButtonIcon src={viewIcon} alt="View Icon" />
              View Table
            </ViewButton>
          </TableCard>
          <TableCard>
            <TableCardTitle>PUBG</TableCardTitle>
            <TableCardText>
              Check out the updated points table for the PUBG Tier-1 tournament
              and see where your favorite teams rank.
            </TableCardText>
            <ViewButton onClick={() => handleViewTable("")}>
              <ButtonIcon src={viewIcon} alt="View Icon" />
              View Table
            </ViewButton>
          </TableCard>
          <TableCard>
            <TableCardTitle>Asphalt</TableCardTitle>
            <TableCardText>
              Get the real-time rankings and standings for the latest Asphalt
              racing championship.
            </TableCardText>
            <ViewButton onClick={() => handleViewTable("")}>
              <ButtonIcon src={viewIcon} alt="View Icon" />
              View Table
            </ViewButton>
          </TableCard>
          <TableCard>
            <TableCardTitle>Call of Duty</TableCardTitle>
            <TableCardText>
              Follow the latest Call of Duty Mobile tournament standings with
              our live-updated points table.
            </TableCardText>
            <ViewButton onClick={() => handleViewTable("")}>
              <ButtonIcon src={viewIcon} alt="View Icon" />
              View Table
            </ViewButton>
          </TableCard>
        </TableCardsContainer>
      </PointsTableSection>

      {/* Conditional Popup Modal */}
      {popupImage && (
        <PopupModal onClick={handleClosePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <PopupImage src={popupImage} alt="Points Table" />
            <CloseButton onClick={handleClosePopup}>Close Table</CloseButton>
          </PopupContent>
        </PopupModal>
      )}
      <Footer />
    </NewsSection>
  );
};

export default News;
