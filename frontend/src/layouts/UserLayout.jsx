// 🧭 UserLayout.jsx — Navigation Layout for User Routes
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Chatbot from "../components/Chatbot"; // ✅ Import Chatbot

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Gyms", path: "/gyms" },
  { label: "Trainers", path: "/trainers" },
  { label: "Leaderboard", path: "/leaderboard" },
  { label: "Diet", path: "/diet" },
  { label: "Fees", path: "/fees" },
  { label: "Payment", path: "/payment" },
  { label: "Reports", path: "/reports" },
  { label: "Profile", path: "/profile" },
  { label: "Shop", path: "/shop" },
];

const UserLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">RealGym</h1>
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium ${
                location.pathname === link.path
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <main className="flex-1 bg-gray-50 p-4">{children}</main>

      <Chatbot /> {/* ✅ Visible chatbot in bottom-right */}

      <footer className="bg-white text-center text-sm py-3 border-t text-gray-500">
        © 2025 RealGym. All rights reserved.
      </footer>
    </div>
  );
};

export default UserLayout;

