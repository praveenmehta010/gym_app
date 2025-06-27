import React from "react";
import { useParams } from "react-router-dom";
import "./GymDetail.css";

const gyms = {
  1: {
    name: "Iron Paradise",
    location: "Delhi",
    description: "Premium gym with modern equipment and expert trainers.",
    contact: "+91 9876543210",
    timing: "6 AM - 10 PM",
    images: ["/images/gym1.jpg", "/images/gym2.jpg"],
    testimonial: "Best gym experience! Great trainers and vibe.",
    trainer: "Mr. Arjun Singh"
  },
  2: {
    name: "Muscle Factory",
    location: "Mumbai",
    description: "High-intensity training and bodybuilding gym.",
    contact: "+91 9123456780",
    timing: "5 AM - 11 PM",
    images: ["/images/gym2.jpg", "/images/gym1.jpg"],
    testimonial: "Best for serious fitness freaks!",
    trainer: "Ms. Kavita Joshi"
  }
};

const GymDetail = () => {
  const { id } = useParams();
  const gym = gyms[id];

  if (!gym) return <h2 style={{ padding: "20px" }}>Gym not found</h2>;

  return (
    <div className="gym-detail">
      <h2>{gym.name}</h2>
      <div className="images">
        {gym.images.map((img, i) => (
          <img key={i} src={img} alt={`gym-${i}`} />
        ))}
      </div>
      <p><strong>Location:</strong> {gym.location}</p>
      <p><strong>Contact:</strong> {gym.contact}</p>
      <p><strong>Timings:</strong> {gym.timing}</p>
      <p><strong>Trainer:</strong> {gym.trainer}</p>
      <p><strong>Description:</strong> {gym.description}</p>
      <blockquote><strong>Testimonial:</strong> "{gym.testimonial}"</blockquote>
    </div>
  );
};

export default GymDetail;



