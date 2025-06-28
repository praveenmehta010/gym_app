// src/components/TrainerDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import "./TrainerDetail.css"; // style this

const trainerData = {
  1: { name: "Aryan Tanwar", about: "10+ years experience in strength training" },
  2: { name: "Dev Singh", about: "Certified cardio coach, HIIT trainer" },
  3: { name: "Tanwar Rishi", about: "Expert in mindfulness and yoga techniques" },
};

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainerData[id];

  if (!trainer) return <p>Trainer not found</p>;

  return (
    <div className="trainer-detail">
      <h2>{trainer.name}</h2>
      <p>{trainer.about}</p>
      <button onClick={() => alert("Contact form coming soon!")}>📞 Contact Trainer</button>
    </div>
  );
};

export default TrainerDetail;



