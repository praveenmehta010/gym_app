import React from "react";
import "./GymCard.css";

const GymCard = ({ title, location, image }) => {
  return (
    <div className="gym-card">
      <img src={image} alt={title} />
      <div className="gym-details">
        <h3>{title}</h3>
        <p>{location}</p>
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default GymCard;

