import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../Logo.png";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState(""); // State variable for email input
  const [password, setPassword] = useState(""); // State variable for password input
  const [accountType, setAccountType] = useState(""); // State variable for account type selection
  const history = useHistory(); // Access to the browser's history

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          isAdmin: accountType === "admin",
        }),
      });

      if (response.ok) {
        // Signup successful, navigate to another page
        history.push("/");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle any error that occurs during signup, e.g., display an error message to the user
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
          {/* Login link */}
          <Link to="/user-login" className="user-login">
            User Login
          </Link>
          <Link to="/admin-login" className="admin-login">
            Admin Login
          </Link>
        </div>
      </nav>
      <hr></hr>
      <div className="container">
        {/* Signup header */}
        <h2 className="signup-header">Signup</h2>
        {/*Removed google and facebook signup as discussed with mentor (Removed from curriculum)*/}
        {/* Signup form */}
        <form onSubmit={handleSignup}>
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
          {/* Account type select */}
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="">Select Account Type</option>
            <option value="admin">Admin (Manage events)</option>
            <option value="user">User (Find Events)</option>
          </select>

          {/* Signup button */}
          <button type="submit" className="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
