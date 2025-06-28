import React from 'react';
import './TrainerList.css';
import { useNavigate } from 'react-router-dom';

const TrainerList = () => {
  const navigate = useNavigate();

  const trainers = [
    { id: 1, name: "Arjun Singh", specialty: "🏋️ Weight Training" },
    { id: 2, name: "Simran Kaur", specialty: "🧘 Cardio & Yoga" },
    { id: 3, name: "Rahul Verma", specialty: "💪 CrossFit Expert" },
  ];

  const handleContact = (trainerId) => {
    navigate(`/contact?trainer=${trainerId}`);
  };

  return (
    <div className="trainer-list-container">
      <h2 className="trainer-title">🔥 Our Top Trainers</h2>
      <div className="trainer-grid">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="trainer-card">
            <h3>{trainer.name}</h3>
            <p>{trainer.specialty}</p>
            <button
              className="contact-btn"
              onClick={() => handleContact(trainer.id)}
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



