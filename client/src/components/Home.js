// Import React and required dependencies
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS styles for the Home component
import Logo from "../Logo.png"; // Import the logo image
import Find from "../Find.png"; // Import the image for the User section
import Manage from "../Manage.png"; // Import the image for the Admin section

// Define the Home component
const Home = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <img src={Logo} alt="Logo" /> {/* Display the logo image */}
        <div className="right-links">
          {/* Login link */}
          <Link to="/user-login" className="user-login">
            User Login
          </Link>
          <Link to="/admin-login" className="admin-login">
            Admin Login
          </Link>
          {/* Signup link */}
          <Link to="/signup" className="signup">
            Sign up
          </Link>
        </div>
      </nav>
      <hr></hr>
      {/* Heading: Find the best events */}
      <h1 className="FindEvents">Find the best events!</h1>
      {/* Heading: Manage your events */}
      <h1 className="ManageEvents">Manage your events!</h1>
      <div className="Home">
        {/* User section */}
        <div className="User">
          <img src={Find} alt="Find" className="FindEventsImg"></img>{" "}
          {/* Display the image for the User section */}
          {/* User section heading */}
          <h2 className="discoverEvents">Discover events in your area</h2>
          {/* User section subheading */}
          <h3 className="Register">
            Register for events that you want to attend
          </h3>
        </div>
        {/* Admin section */}
        <div className="Admin">
          <img src={Manage} alt="Manage" className="ManageEventsImg"></img>{" "}
          {/* Display the image for the Admin section */}
          {/* Admin section heading */}
          <h2 className="uploadEvents">Upload your event</h2>
          {/* Admin section subheading */}
          <h3 className="Manage">
            Manage your events. Customize to your hearts desire
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home; // Export the Home component as the default export
