import React from 'react';
import './Contact.css';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const trainerId = params.get("trainer");

  const trainerData = {
    1: { name: "Arjun Singh", specialty: "Weight Training" },
    2: { name: "Simran Kaur", specialty: "Cardio & Yoga" },
    3: { name: "Rahul Verma", specialty: "CrossFit Expert" },
  };

  const trainer = trainerData[trainerId];

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>📞 Contact {trainer?.name || "Trainer"}</h2>
        <p className="specialty">{trainer?.specialty}</p>

        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder={`Message for ${trainer?.name || "trainer"}...`} required></textarea>

          <button type="submit" className="send-btn">📤 Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
