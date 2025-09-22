import { useState } from "react";

const HomePageDiscoverGames = () => {
  const games = [
    {
      title: "Free Fire",
      description: "An exciting new adventure with stunning graphics.",
      imageUrl:
        "https://images.wallpapersden.com/image/download/garena-free-fire-game_a2xtZWqUmZqaraWkpJRmbmdmrWZlbWY.jpg",
    },
    {
      title: "Pubg",
      description: "A fast-paced strategy game that will test your skills.",
      imageUrl:
        "https://row.haluan.co/wp-content/uploads/2024/02/pubg-mobile-uc-.jpg",
    },
    {
      title: "Call Of Duty",
      description: "Explore a mysterious world and solve ancient puzzles.",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/PmC7crTzqE9pJ8ociN9vFZ.png",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "600",
          color: "#333333",
          marginBottom: "2rem",
        }}
      >
        Engage Our Premium Games Now
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            description={game.description}
            imageUrl={game.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

const GameCard = (title, description, imageUrl) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: "#f8f8f8",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    width: "320px",
    border: "0.5px solid black",
    transition: "transform 0.3s ease-in-out",
    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "black" : "lightgrey",
    color: isHovered ? "white" : "black",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          height: "200px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div style={{ padding: "1.5rem", textAlign: "left" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            color: "#333333",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#666666",
            lineHeight: "1.4",
            marginBottom: "1.25rem",
          }}
        >
          {description}
        </p>
        <button style={buttonStyle}>Play Now</button>
      </div>
    </div>
  );
};

export default HomePageDiscoverGames;
