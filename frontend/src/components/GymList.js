import React from "react";
import "./GymList.css";

const gyms = [
  { id: 1, name: "Gold's Gym", location: "Delhi", rating: 4.5 },
  { id: 2, name: "Fitness First", location: "Noida", rating: 4.2 },
  { id: 3, name: "Cult Fit", location: "Gurgaon", rating: 4.7 },
];

const GymList = () => {
  return (
    <div className="gym-list">
      <h2>Nearby Gyms</h2>
      <div className="gym-cards">
        {gyms.map((gym) => (
          <div className="gym-card" key={gym.id}>
            <h3>{gym.name}</h3>
            <p>📍 {gym.location}</p>
            <p>⭐ {gym.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymList;
