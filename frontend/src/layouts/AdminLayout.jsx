// 🧭 AdminLayout.jsx — Navigation Layout for Admin Panel
import React from "react";
import { Link, useLocation } from "react-router-dom";

const adminLinks = [
  { label: "Dashboard", path: "/admin/dashboard" },
  { label: "Users", path: "/admin/users" },
  { label: "Gyms", path: "/admin/gyms" },
  { label: "Trainers", path: "/admin/trainers" },
  { label: "Payments", path: "/admin/payments" },
];

const AdminLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">Admin Panel</h1>
        <div className="flex gap-4">
          {adminLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium ${
                location.pathname === link.path
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <main className="flex-1 bg-gray-50 p-4">{children}</main>

      <footer className="bg-white text-center text-sm py-3 border-t text-gray-500">
        © 2025 RealGym Admin. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminLayout;