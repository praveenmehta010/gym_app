import React from "react";
import { Link } from "react-router-dom";

const TrainerDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏋️ Hello, Trainer Aryan</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-4">
          <h3 className="font-semibold text-lg mb-2">My Clients</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>John Doe — Weekly Plan</li>
            <li>Ananya Sharma — Weight Loss</li>
            <li>Ravi Kapoor — Strength</li>
          </ul>
        </div>
        <div className="glass-card p-4">
          <h3 className="font-semibold text-lg mb-2">Actions</h3>
          <Link to="/reports">
            <button className="btn-primary w-full mb-2">📊 Upload Progress</button>
          </Link>
          <Link to="/diet">
            <button className="btn-primary w-full">🍽️ Add Diet Plan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;

