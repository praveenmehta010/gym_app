// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import BoxesCore from "../components/ui/background-boxes-demo"; // Make sure path is correct

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 overflow-hidden">
      <BoxesCore />

      <section className="text-center py-20 px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Welcome to <span className="text-blue-600">RealGym</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Discover top-rated gyms & trainers near you. Track your progress, shop fitness gear, and stay on top of your goals.
        </p>
        <div className="mt-6">
          <Link
            to="/gyms"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-md"
          >
            Find a Gym
          </Link>
        </div>
      </section>

      <section className="bg-white py-12 px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 shadow rounded-xl">
            <h3 className="text-lg font-bold text-blue-700">📍 Nearby Gyms</h3>
            <p className="text-sm text-gray-500 mt-2">
              Gyms within 10km radius with top facilities and reviews.
            </p>
          </div>
          <div className="p-6 shadow rounded-xl">
            <h3 className="text-lg font-bold text-blue-700">🏋️ Expert Trainers</h3>
            <p className="text-sm text-gray-500 mt-2">
              Find trainers based on ranking, reviews, and specialty.
            </p>
          </div>
          <div className="p-6 shadow rounded-xl">
            <h3 className="text-lg font-bold text-blue-700">📦 Shop Essentials</h3>
            <p className="text-sm text-gray-500 mt-2">
              Buy high-quality gym supplements, gear, and wear.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-16 px-4 relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🔥 Ready to Transform?</h2>
        <p className="text-gray-500 mb-4">
          Join thousands of fitness enthusiasts reaching their goals with RealGym.
        </p>
        <Link
          to="/signup"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
