import React, { useState, useEffect } from 'react';
import "./GymList.css";
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
  
const GymList = () => {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const res = await axios.get('http://localhost:3100/api/users/gym/list');
        setGyms(res.data);
      } catch (err) {
        console.error("Failed to fetch trainers:", err);
      }
    };

    fetchGyms();
  }, []);

  return (
    <div className="gym-list-container">
      <h2 className="gym-title"> 🔥 Nearby Gyms</h2>
      <div className="gym-grid">
        {gyms.map((gym) => (
          <div key={gym.id} className="gym-card" >
            <h3>{gym.gymName}</h3>
            <p>📍 {gym.gymLocation}</p>
            <p>⭐ {gym.gymRating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymList;
