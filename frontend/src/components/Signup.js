import React from 'react';

import './Signup.css';

import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await fetch("http://localhost:3100/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form action="/signUp" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="User Name" {...register("userName")} />
        <input type="text" placeholder="Full Name" {...register("name")} />
        <input type="email" placeholder="Email" {...register("emailId")} />
        <input type="text" placeholder="Phone Number" {...register("phoneNumber")} />
        <input type="password" placeholder="Password" {...register("password")} />
        <select {...register("userType")}>
          <option value="user">User</option>
          <option value="trainer">Trainer</option>
          <option value="admin">Gym Admin</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
