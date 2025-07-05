import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold text-red-600 mb-2">RealGym</h3>
          <p>Your fitness companion — find gyms, track progress, and stay motivated every day.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-red-600">Home</Link></li>
            <li><Link to="/gyms" className="hover:text-red-600">Gyms</Link></li>
            <li><Link to="/trainers" className="hover:text-red-600">Trainers</Link></li>
            <li><Link to="/leaderboard" className="hover:text-red-600">Leaderboard</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-red-600"><Facebook size={20} /></a>
            <a href="#" className="hover:text-red-600"><Instagram size={20} /></a>
            <a href="#" className="hover:text-red-600"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t text-xs text-gray-500">
        © {new Date().getFullYear()} RealGym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

