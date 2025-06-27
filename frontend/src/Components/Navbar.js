import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🏋️ GymZone</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Gyms</Link></li>
        <li><Link to="/trainers">Trainers</Link></li>
        <li><Link to="#">Login</Link></li>
        <li><Link to="#">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;












