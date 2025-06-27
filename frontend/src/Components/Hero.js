import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>🏋️‍♂️ Welcome to GymZone</h1>
        <p>Your fitness journey starts here!</p>
      </div>
    </div>
  );
};

export default Hero;
