import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animation for a subtle glowing effect on hover
const softGlow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.5); }
  100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2); }
`;

// Keyframe animation for subtle floating background orbs
const orbFloat = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 0.15; }
  25% { transform: translate(-15px, 20px) scale(1.05); opacity: 0.2; }
  50% { transform: translate(0, 0) scale(1); opacity: 0.15; }
  75% { transform: translate(15px, -20px) scale(1.05); opacity: 0.2; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.15; }
`;

// New keyframe for the gentle pulse on poll options before voting
const gentlePulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
  50% { transform: scale(1.01); box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1); }
  100% { transform: scale(1); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
`;

// New keyframe for the results bar reveal
const barReveal = keyframes`
  from { width: 0%; }
  to { width: var(--percentage); }
`;

const PollContainer = styled.div`
  padding: 5rem 20px;
  background-color: #121212; /* Dark theme background */
  color: #f0f0f0; /* Light text color */
  text-align: center;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Light border */
  position: relative;
  overflow: hidden;
  z-index: 1;

  /*
  The mobile media query for the container is already well-defined
  and handles the basic padding and margin adjustments.
  */
  @media (max-width: 768px) {
    padding: 3.5rem 15px;
    margin-top: 3rem;
  }
`;

const PollTitle = styled.h2`
  font-size: 2.5rem;
  color: #e0e0e0; /* Light text color */
  margin-bottom: 1.8rem;
  text-shadow: 0 0 10px rgba(224, 224, 224, 0.1),
    0 0 20px rgba(224, 224, 224, 0.05); /* Light text shadow */
  font-weight: 900;
  letter-spacing: 0.05em;

  /*
  Here we define a new, more specific media query for smaller screens.
  It adjusts the font size to be more readable on phones.
  */
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PollQuestion = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  color: #ccc; /* Lighter gray text color */
  max-width: 750px;
  margin: 0 auto 3.5rem auto;
  font-weight: 400;
  line-height: 1.6;

  /*
  Similarly, we adjust the question's font size for smaller screens
  to prevent it from taking up too much space.
  */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 600px;
  margin: 0 auto;

  /*
  For mobile, we can reduce the gap between the options for a more
  compact and efficient layout.
  */
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const PollOption = styled.button`
  background-color: #1e1e1e; /* Darker background for options */
  border: 1px solid #333; /* Darker border */
  border-radius: 10px;
  padding: 20px 30px;
  color: #f0f0f0; /* Light text color */
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Darker shadow */
  position: relative;
  overflow: hidden;
  animation: ${gentlePulse} 3s ease-in-out infinite;
  text-align: center;

  &:hover {
    background-color: #2a2a2a; /* Slightly lighter on hover */
    border-color: #76b5c5;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4),
      0 0 15px rgba(255, 255, 255, 0.5); /* White shadow on hover */
    animation: ${softGlow} 1.5s infinite alternate;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #1a1a1a;
    border-color: #333;
    transform: none;
    box-shadow: none;
    animation: none;
  }

  /*
  To make the buttons more compact on small screens,
  we can reduce their padding.
  */
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 15px 20px;
  }
`;

const ResultsContainer = styled(OptionsContainer)`
  position: relative;
  margin-top: 3rem;
`;

const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

const ResultText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ccc; /* Lighter text for results */

  /*
  Adjusting the font size of the result text for mobile
  */
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: #333; /* Darker background for the bar */
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* Darker inset shadow */
`;

const ProgressBarFill = styled.div`
  --percentage: ${(props) => props.$percentage}%;
  height: 100%;
  width: var(--percentage);
  background: linear-gradient(90deg, #76b5c5, #a3c1d0);
  border-radius: 6px;
  animation: ${barReveal} 0.8s ease-out forwards;
`;

const VotedOption = styled(ResultItem)`
  ${ResultText} {
    color: #4a90e2;
    font-weight: 700;
  }
  ${ProgressBarFill} {
    background: linear-gradient(90deg, #4a90e2, #6a71e6);
  }
`;

const ResetButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 14px 35px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 3rem;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); /* Darker shadow */

  &:hover {
    background-color: #3b74c2;
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }

  /*
  The button also needs a smaller font size and padding
  to fit better on a phone screen.
  */
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 12px 25px;
  }
`;

const EsportsEngagementPoll = () => {
  const pollQuestion = "Which game will dominate esports in 2026?";
  const initialOptions = [
    { id: "valorant", text: "Valorant", votes: 150 },
    { id: "lol", text: "Free Fire", votes: 120 },
    { id: "cs2", text: "Counter-Strike 2", votes: 100 },
    { id: "apex", text: "Apex Legends", votes: 80 },
  ];

  const [options, setOptions] = useState(initialOptions);
  const [voted, setVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedVoted = localStorage.getItem("esportsPollVoted");
    const storedSelectedOption = localStorage.getItem(
      "esportsPollSelectedOption"
    );
    const storedVotes = localStorage.getItem("esportsPollVotes");

    if (storedVoted === "true" && storedSelectedOption) {
      setVoted(true);
      setSelectedOption(storedSelectedOption);
      if (storedVotes) {
        setOptions(JSON.parse(storedVotes));
      }
    }
  }, []);

  const handleVote = (optionId) => {
    if (voted) return;

    const updatedOptions = options.map((option) =>
      option.id === optionId ? { ...option, votes: option.votes + 1 } : option
    );

    setOptions(updatedOptions);
    setVoted(true);
    setSelectedOption(optionId);

    localStorage.setItem("esportsPollVoted", "true");
    localStorage.setItem("esportsPollSelectedOption", optionId);
    localStorage.setItem("esportsPollVotes", JSON.stringify(updatedOptions));
  };

  const handleReset = () => {
    setOptions(initialOptions);
    setVoted(false);
    setSelectedOption(null);
    localStorage.removeItem("esportsPollVoted");
    localStorage.removeItem("esportsPollSelectedOption");
    localStorage.removeItem("esportsPollVotes");
  };

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <PollContainer>
      <PollTitle>Cast Your Vote!</PollTitle>
      <PollQuestion>{pollQuestion}</PollQuestion>

      {!voted ? (
        <OptionsContainer>
          {options.map((option) => (
            <PollOption key={option.id} onClick={() => handleVote(option.id)}>
              {option.text}
            </PollOption>
          ))}
        </OptionsContainer>
      ) : (
        <ResultsContainer>
          {options.map((option) => {
            const percentage =
              totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
            const Component =
              option.id === selectedOption ? VotedOption : ResultItem;
            return (
              <Component key={option.id}>
                <ResultText>
                  <span>
                    {option.text}
                    {option.id === selectedOption && " 🏆"}
                  </span>
                  <span>{Math.round(percentage)}%</span>
                </ResultText>
                <ProgressBar>
                  <ProgressBarFill $percentage={percentage} />
                </ProgressBar>
              </Component>
            );
          })}
          <ResetButton onClick={handleReset}>Vote Again</ResetButton>
        </ResultsContainer>
      )}
    </PollContainer>
  );
};

export default EsportsEngagementPoll;
