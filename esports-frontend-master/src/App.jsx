import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import News from "./pages/News";

import Pagenotfound from "./components/Pagenotfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();

  // Hide Navbar for login & signup
  const hideNavbarRoutes = [
    "/auth/login",
    "/auth/signup",
    "/auth/user/forgot-password",
  ];
  const HideNavbar = hideNavbarRoutes.includes(location.pathname);

  // Map routes to page titles
  const pageTitles = {
    "/": "Home",
    "/games": "Sports",
    "/news": "News",
    "/contact": "Contact Us",
    "/contact/info": "Contact Info",
    "/contact/form": "Contact Form",
    "/auth/login": "Login",
    "/auth/signup": "Signup",
    "/auth/user/forgot-password": "Forgot Password",
  };

  // Update tab title on route change
  useEffect(() => {
    document.title = pageTitles[location.pathname] || " 404 - Page Not Found";
  }, [location.pathname]);

  return (
    <>
      {!HideNavbar && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Sports />} />
          {/* Authenticator */}
          <Route path="/auth/login" element={<Login />} />
          <Route
            path="/auth/user/forgot-password"
            element={<ForgotPassword />}
          />
          <Route path="/auth/signup" element={<Signup />} />

          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
