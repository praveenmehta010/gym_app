import React from "react";
import "./TrainerCard.css";

const TrainerCard = ({ name, specialty, image }) => {
  return (
    <div className="trainer-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Specialty: {specialty}</p>
    </div>
  );
};

export default TrainerCard;
