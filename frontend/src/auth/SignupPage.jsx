// 📝 SignupPage.jsx — Styled Sign-Up Form
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    userType: "user",
  });
  const navigate = useNavigate();



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:3100/api/register", form);

    if (response.status === 201 ) {
// Navigate based on role
      if (form.userType === "trainer") {
        navigate("/trainer/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    }
     else {
      alert("Signup failed. Try again.");
    }
  } 
  catch (error) {
    console.error("❌ Error during signup:", error.response?.data || error.message);
    alert("Signup failed: " + (error.response?.data?.message || "SignUp Failed."));
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 to-slate-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-green-600">Join RealGym</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <select
          name="role"
          value={form.userType}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="user">User</option>
          <option value="trainer">Trainer</option>
        </select>
        <button type="submit" className="btn-primary w-full">Sign Up</button>
        <p className="text-sm text-center text-gray-500">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
