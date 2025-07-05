// 🧭 TrainerLayout.jsx — Navigation Layout for Trainer Routes
import React from "react";
import { Link, useLocation } from "react-router-dom";

const trainerLinks = [
  { label: "Dashboard", path: "/trainer/dashboard" },
  { label: "Clients", path: "/trainer/clients" },
  { label: "Schedule", path: "/trainer/schedule" },
  { label: "Messages", path: "/trainer/messages" },
  { label: "Profile", path: "/trainer/profile" },
];

const TrainerLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-600">Trainer Portal</h1>
        <div className="flex gap-4">
          {trainerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium ${
                location.pathname === link.path
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-600 hover:text-purple-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <main className="flex-1 bg-gray-50 p-4">{children}</main>

      <footer className="bg-white text-center text-sm py-3 border-t text-gray-500">
        © 2025 RealGym Trainer. All rights reserved.
      </footer>
    </div>
  );
};

export default TrainerLayout;

