import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`🟢 Logged in as: ${email}`);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: { marginTop: "80px", textAlign: "center" },
  form: {
    display: "inline-block",
    textAlign: "left",
    padding: "30px",
    borderRadius: "8px",
    background: "#f1f1f1"
  },
  input: {
    display: "block",
    marginBottom: "15px",
    padding: "10px",
    width: "250px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default Login;
