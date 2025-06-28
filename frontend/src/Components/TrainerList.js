import React from "react";
import TrainerCard from "./TrainerCard";

const trainers = [
  {
    id: 1,
    name: "John Rock",
    image: "/images/trainer1.jpg",
    specialty: "Bodybuilding",
  },
  {
    id: 2,
    name: "Anjali Fit",
    image: "/images/trainer2.jpg",
    specialty: "Weight Loss",
  }
];

const TrainerList = () => {
  return (
    <div className="cards">
      {trainers.map(trainer => (
        <TrainerCard key={trainer.id} {...trainer} />
      ))}
    </div>
  );
};

export default TrainerList;
