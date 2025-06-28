import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import GymCard from "./Components/GymCard";
import GymDetail from "./Components/GymDetail";
import TrainerCard from "./Components/TrainerCard";
import ContactForm from "./Components/ContactForm";
import "./App.css";

const Home = () => (
  <>
    <Hero />
    <div className="card-section">
      <GymCard
        id={1}
        name="Iron Paradise"
        location="Delhi"
        rank={5}
        image="/images/gym1.jpg"
      />
      <GymCard
        id={2}
        name="Muscle Factory"
        location="Mumbai"
        rank={4}
        image="/images/gym2.jpg"
      />
    </div>
  </>
);

const Trainers = () => (
  <>
    <h2 style={{ textAlign: "center" }}>Meet Our Trainers</h2>
    <div className="card-section">
      <TrainerCard
        name="Amit Rana"
        specialty="Bodybuilding"
        image="/images/trainer1.jpg"
      />
    </div>
    <ContactForm />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gyms/:id" element={<GymDetail />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </Router>
  );
}

export default App;

