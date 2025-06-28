import React from "react";
import GymCard from "./GymCard";

const gyms = [
  {
    id: 1,
    name: "Iron Paradise",
    location: "Delhi",
    image: "/images/gym1.jpg",
    rank: 5,
  },
  {
    id: 2,
    name: "Muscle Factory",
    location: "Mumbai",
    image: "/images/gym2.jpg",
    rank: 4,
  }
];

const GymList = () => {
  return (
    <div className="cards">
      {gyms.map(g => <GymCard key={g.id} {...g} />)}
    </div>
  );
};

export default GymList;
