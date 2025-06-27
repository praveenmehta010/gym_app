import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "./ContactForm";

const TrainerDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: "20px" }}>
      <h2>Trainer Profile - ID: {id}</h2>
      <img src="/images/trainer1.jpg" width="250" alt="trainer" />
      <p><strong>Name:</strong> John Rock</p>
      <p><strong>Specialty:</strong> Bodybuilding</p>
      <p><strong>Experience:</strong> 5 Years</p>
      <p><strong>Contact:</strong> +91-8888888888</p>

      <h3>Contact the Trainer</h3>
      <ContactForm />
    </div>
  );
};

export default TrainerDetail;

