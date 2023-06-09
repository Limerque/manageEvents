import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Logo from "../Logo.png";
import "./Login.css";

const AdminLogin = () => {
  const [email, setEmail] = useState(""); // State variable for email input
  const [password, setPassword] = useState(""); // State variable for password input
  const history = useHistory(); // Access to the browser's history

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the server
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Successful login response
        const { token, isAdmin } = await response.json();

        if (isAdmin) {
          // If admin, store token in local storage and redirect to manage endpoint
          localStorage.setItem("token", token);
          history.push("/manage");
          return; // Added this line to exit the function after redirecting
        }
      }

      throw new Error("Invalid login credentials or user is not an admin");
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav>
        <img src={Logo} alt="Logo" />
        <div className="right-links">
          {/* Home link */}
          <Link to="/" className="Home">
            Home
          </Link>
          {/* Sign up link */}
          <Link to="/signup" className="signup">
            Sign up
          </Link>
          <Link to="/user-login" className="user-login">
            User Login
          </Link>
        </div>
      </nav>
      <hr />
      <div className="container">
        {/* Login header */}
        <h2 className="login-header">Admin Log in</h2>
        {/* Login form */}
        <form onSubmit={handleLogin}>
          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Login button */}
          <button type="submit" className="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
