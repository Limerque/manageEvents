import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.png";
import "./Find.css";

const Find = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    try {
      // Fetch all events
      const response = await fetch("http://localhost:5000/find/events");
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        throw new Error("Failed to fetch events");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <nav>
        <img src={Logo} alt="Logo" />
        <h1>Find</h1>
        <div className="right-links">
          <Link to="/" className="logout">
            Log out
          </Link>
        </div>
      </nav>
      <h1 className="projects">Projects</h1>
      <div className="find-container">
        <div className="event-container">
          {events.map((event) => (
            <div key={event._id} className="event">
              <img src={event.image} alt={event.eventName} />
              <div className="event-details">
                <div className="event-details-row">
                  <h3>{event.eventName}</h3>
                  <p>Organizer: {event.organizer}</p>
                </div>
                <div className="event-details-row">
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Place: {event.place}</p>
                </div>
                <p>Description: {event.description}</p>
                <div className="event-details-row">
                  <p>Price: {event.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Find;
