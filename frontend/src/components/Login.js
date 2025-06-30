import React, { useState } from "react";
import "./Login.css";

import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await fetch("http://localhost:3100/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <div className="login-container">
      <h2>🔐 Login</h2>
      <form action="/login" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="User Name" {...register("userName")} />
        <input type="password" placeholder="Password" {...register("password")} />
        {/* <select {...register("userType")}>
          <option value="user">User</option>
          <option value="trainer">Trainer</option>
          <option value="admin">Gym Admin</option>
        </select> */}
        <button type="submit">Login</button>
        <p>Don't have an account, create one </p>
        <a href="/register">signUp</a>
      </form>
    </div>
  );
};

export default Login;

