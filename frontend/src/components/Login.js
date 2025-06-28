// src/components/Login.js
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${email}`);
    setEmail(""); setPass("");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>🔐 Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

