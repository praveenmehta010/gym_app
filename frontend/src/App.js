import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import GymCard from "./Components/GymCard";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function HomePage() {
  return (
    <>
      <Hero />
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "40px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <GymCard
          title="Iron Paradise"
          location="Delhi"
          image="https://source.unsplash.com/400x300/?gym"
        />
        <GymCard
          title="Muscle Factory"
          location="Mumbai"
          image="https://source.unsplash.com/400x300/?fitness"
        />
        <GymCard
          title="Beast Mode"
          location="Bangalore"
          image="https://source.unsplash.com/400x300/?workout"
        />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;


