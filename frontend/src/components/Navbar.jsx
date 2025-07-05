import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Dumbbell, UserCircle2, LogOut, MessageCircle, CalendarDays, Star, Trophy, Newspaper } from "lucide-react";

const Navbar = () => {
  const { user, logout, isTrainer, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-red-600">
        <Dumbbell className="w-6 h-6" /> RealGym
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-5 text-sm font-medium">
       {true &&  (
          <>
            <Link to="/gyms" className="hover:text-red-500">Gyms</Link>
            <Link to="/trainers" className="hover:text-red-500">Trainers</Link>
            <Link to="/leaderboard" className="hover:text-red-500">Leaderboard</Link>
            <Link to="/feed" className="hover:text-red-500 flex items-center gap-1"><Newspaper size={16}/> Feed</Link>
            <Link to="/messages" className="hover:text-red-500 flex items-center gap-1"><MessageCircle size={16}/> Chat</Link>
            <Link to="/bookings" className="hover:text-red-500 flex items-center gap-1"><CalendarDays size={16}/> Book</Link>
            <Link to="/rewards" className="hover:text-red-500 flex items-center gap-1"><Trophy size={16}/> Rewards</Link>
            <Link to="/reviews" className="hover:text-red-500 flex items-center gap-1"><Star size={16}/> Reviews</Link>
            <Link to="/shop" className="hover:text-red-500">Shop</Link>
          </>
        )}

        {isTrainer && (
          <Link to="/trainer/dashboard" className="hover:text-red-500">Trainer Dashboard</Link>
        )}

        {isAdmin && (
          <Link to="/admin/dashboard" className="hover:text-red-500">Admin Panel</Link>
        )}

        {user ? (
          <>
            <Link to="/profile" className="flex items-center gap-1 hover:text-red-500">
              <UserCircle2 className="w-5 h-5" /> {user.name}
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-red-600 flex items-center gap-1"
            >
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-red-500">Login</Link>
            <Link
              to="/signup"
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


