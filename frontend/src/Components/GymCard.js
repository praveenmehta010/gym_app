import React from "react";
import { Link } from "react-router-dom";
import "./GymCard.css";

const GymCard = ({ id, name, location, rank, image }) => {
  return (
    <div className="gym-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
      <p>Rank: {rank}</p>
      <Link to={`/gyms/${id}`} className="btn">View Details</Link>
      <button className="btn join">Join Now</button>
    </div>
  );
};

export default GymCard;


