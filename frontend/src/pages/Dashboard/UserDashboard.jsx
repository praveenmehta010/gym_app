import React from "react";
import { Link } from "react-router-dom";
import ProgressTracker from "../../components/ProgressTracker";

const UserDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">👤 Welcome, Aryan</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-4">
          <h3 className="text-lg font-semibold mb-2">Workout Progress</h3>
          <ProgressTracker />
        </div>
        <div className="glass-card p-4">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-blue-600">
            <li><Link to="/diet">🍽️ View Diet Plan</Link></li>
            <li><Link to="/reports">📈 Reports</Link></li>
            <li><Link to="/fees">💰 My Fees</Link></li>
            <li><Link to="/shop">🛒 Visit Shop</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

