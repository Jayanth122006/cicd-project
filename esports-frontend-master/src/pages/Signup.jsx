import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Eclogo from "../assets/sportsPageImgs/esportlogo.png";
import Loginpgaeimg from "../assets/sportsPageImgs/loginpageimg.png";

export default function Signup() {
  // --- State to hold user input ---
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // --- Function to handle form submission ---
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", {
        username,
        email,
        password,
      });

      console.log("Signup successful:", response.data);
      alert("Account created successfully! Please log in.");
      navigate("/auth/login"); // Redirect to login page on success

    } catch (error) {
      console.error("Signup failed:", error);
      const errorMessage = error.response ? error.response.data : "Signup failed! The server is not responding.";
      alert(errorMessage);
    }
  };

  return (
    <div className="main-container">
      <style>{/* All your CSS from the component is here */ `
        .main-container { display: flex; min-height: 100vh; width: 100vw; overflow: hidden; background: #000; color: #E0E0E0; font-family: "Inter", sans-serif; }
        .left-panel { flex: 1; position: relative; background: #121212; overflow: hidden; }
        .slideshow-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 1; transition: opacity 1s ease-in-out; }
        .right-panel { width: 520px; background: rgba(35, 31, 31, 0.9); padding: 50px; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; }
        @media (max-width: 768px) { .left-panel { display: none; } .right-panel { width: 100%; padding: 30px; } }
        .auth-card { background-color: #1a1a1a; padding: 2.5rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); width: 100%; max-width: 400px; margin: 0 auto; }
        .logo-container { display: flex; justify-content: center; margin-bottom: 1rem; }
        .logo { width: 80px; height: 80px; border-radius: 50%; border: 1px solid #707070; box-shadow: 0 0 15px rgba(112, 112, 112, 0.4); }
        .title { color: #F0F0F0; text-align: center; margin-bottom: 20px; font-size: 1.5rem; font-weight: 700; }
        .input { width: 100%; padding: 12px; margin: 10px 0; border: 2px solid transparent; border-radius: 6px; background: #222222; color: #E0E0E0; font-size: 1rem; transition: border 0.3s ease; box-sizing: border-box; }
        .input:focus { outline: none; border: 2px solid #707070; }
        .button { background: white; color: #1a1a1a; border: none; padding: 14px; width: 100%; margin-top: 10px; border-radius: 6px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: background-color 0.3s ease, transform 0.3s ease; }
        .button:hover { background-color: #f0f0f0; transform: translateY(-2px); }
        .small-text { margin-top: 17px; text-align: center; color: #888888; font-size: 0.875rem; }
        .link { color: #F0F0F0; font-weight: bold; text-decoration: none; margin-left: 5px; cursor: pointer; }
        .link:hover { text-decoration: underline; }
      `}</style>
      <div className="left-panel">
        <img className="slideshow-image" src={Loginpgaeimg} alt="Esports background" />
      </div>
      <div className="right-panel">
        <div className="auth-card">
          <div className="logo-container">
            <img className="logo" src={Eclogo} alt="Circular Logo" />
          </div>
           {/* The form now has logic attached */}
          <form onSubmit={handleSignup}>
            <h2 className="title">Create Account</h2>
            <input className="input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input className="input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <button className="button" type="submit">Sign Up</button>
            <div className="small-text">
              Already have an account?
              <Link to="/auth/login" className="link">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
