import React, { useState, useEffect } from 'react';
import './TrainerList.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const res = await axios.get('http://localhost:3100/api/users/trainer/list');
        setTrainers(res.data);
      } catch (err) {
        console.error("Failed to fetch trainers:", err);
      }
    };

    fetchTrainers();
  }, []);

  const handleContact = (trainerId) => {
    navigate(`/contact?trainer=${trainerId}`);
  };

  return (
    <div className="trainer-list-container">
      <h2 className="trainer-title">🔥 Our Top Trainers</h2>
      <div className="trainer-grid">
        {trainers.map((trainer) => (
          <div key={trainer._id} className="trainer-card">
            <h3>{trainer.tName}</h3>
            <p>{trainer.tExpertise}</p>
            <p>{trainer.tRating}</p>
            <button
              className="contact-btn"
              onClick={() => handleContact(trainer._id)}
            >
              📞 Contact Trainer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerList;