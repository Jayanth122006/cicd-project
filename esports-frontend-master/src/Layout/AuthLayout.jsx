import React, { useState, useEffect } from "react";
import Eclogo from "../assets/sportsPageImgs/esportlogo.png";
import Loginpgaeimg from "../assets/sportsPageImgs/loginpageimg.png";

const App = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  // Corrected: The images array should contain the imported image directly, not inside an object.
  const images = [Loginpgaeimg];

  // Logic for the background image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const renderLoginView = () => (
    <div className="form-content">
      <h2 className="title">Login Account</h2>
      <input className="input" type="text" placeholder="Username" />
      <input className="input" type="password" placeholder="Password" />
      <div className="forgot-password">
        <a href="#" className="link">
          Forgot Password?
        </a>
      </div>
      <button className="button">Login</button>
      <div className="small-text">
        Don’t have an account?
        <a href="#" className="link" onClick={() => setIsLoginView(false)}>
          Create New
        </a>
      </div>
    </div>
  );

  const renderSignupView = () => (
    <div className="form-content">
      <h2 className="title">Create Account</h2>
      <input className="input" type="text" placeholder="Username" />
      <input className="input" type="email" placeholder="Email" />
      <input className="input" type="password" placeholder="Password" />
      <input className="input" type="password" placeholder="Confirm Password" />
      <button className="button">Sign Up</button>
      <div className="small-text">
        Already have an account?
        <a href="#" className="link" onClick={() => setIsLoginView(true)}>
          Back to Login
        </a>
      </div>
    </div>
  );

  return (
    <div className="main-container">
      <style>
        {`
          @keyframes fade {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .main-container {
            display: flex;
            min-height: 100vh;
            width: 100vw;
            overflow: hidden;
            background: #000;
            color: #E0E0E0;
            font-family: "Inter", sans-serif;
          }

          .left-panel {
            flex: 1;
            position: relative;
            background: #121212;
            overflow: hidden;
          }

          .slideshow-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            animation: fade 1s ease-in-out;
            transition: opacity 1s ease-in-out;
            opacity: 0;
          }

          .slideshow-image.active {
            opacity: 1;
          }

          .right-panel {
            width: 520px;
            background: rgba(35, 31, 31, 0.9);
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
          }
          @media (max-width: 768px) {
            .right-panel {
              width: 100%;
              padding: 30px;
            }
          }

          .auth-card {
            background-color: #1a1a1a;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            width: 100%;
            max-width: 400px;
            margin: 0 auto; /* Center the form in the panel */
          }

          .logo-container {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
          }
          
          .logo {
            width: 80px; /* Reduced logo size */
            height: 80px; /* Reduced logo size */
            border-radius: 50%;
            border: 1px solid #707070;
            box-shadow: 0 0 15px rgba(112, 112, 112, 0.4);
          }

          .title {
            color: #F0F0F0;
            text-align: center;
            margin-bottom: 20px;
            font-size: 1.5rem;
            font-weight: 700;
          }

          .input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: none;
            border-radius: 6px;
            background: #222222;
            color: #E0E0E0;
            font-size: 1rem;
            transition: border 0.3s ease;
            box-sizing: border-box;
          }
          .input:focus {
            outline: none;
            border: 2px solid #707070;
          }

          .forgot-password {
            text-align: right;
            margin-top: -5px;
            margin-bottom: 15px;
          }
          
          .button {
            background: white;
            color: #1a1a1a;
            border: none;
            padding: 14px;
            width: 100%;
            margin-top: 10px;
            border-radius: 6px;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .button:hover {
            background-color: #f0f0f0;
            transform: translateY(-2px);
          }

          .small-text {
            margin-top: 17px;
            text-align: center;
            color: #888888;
            font-size: 0.875rem;
          }

          .link {
            color: #F0F0F0;
            font-weight: bold;
            text-decoration: none;
            margin-left: 5px;
            cursor: pointer;
          }
          .link:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="left-panel">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slideshow-image ${
              imageIndex === index ? "active" : ""
            }`}
            src={image}
            alt={`Slideshow image ${index + 1}`}
            onError={(e) => {
              // Fallback to a placeholder if the image fails to load
              if (e.target.src !== images[images.length - 1]) {
                e.target.src = images[images.length - 1];
              }
            }}
          />
        ))}
      </div>
      <div className="right-panel">
        <div className="auth-card">
          <div className="logo-container">
            <img className="logo" src={Eclogo} alt="Circular Logo" />
          </div>
          {isLoginView ? renderLoginView() : renderSignupView()}
        </div>
      </div>
    </div>
  );
};

export default App;
