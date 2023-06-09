import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Logo.png";
import "./Manage.css";

const Manage = () => {
  const [events, setEvents] = useState([]);
  const history = useHistory();

  const handleEdit = (id) => {
    history.push(`/manage/edit/${id}`);
  };

  const handleCancel = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/manage/events/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response.ok) {
        // Remove the canceled event from the events array
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event._id !== id)
        );
      } else {
        // Display error message when cancellation fails
        throw new Error("Failed to cancel event");
      }
    } catch (error) {
      console.error(error);
      // Display error message or perform additional error handling
    }
  };
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/manage/events", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav>
        <img src={Logo} alt="Logo" />
        <h1 className="manage-header">Manage</h1>
        <div className="right-links">
          {/* Logout link */}
          <Link to="/" className="logout">
            Log out
          </Link>
        </div>
      </nav>
      <hr />
      {/* Add Event link */}
      <Link to="/manage/add" className="AddEvent">
        Add Event
      </Link>
      <h1 className="projects">Projects</h1>
      <div className="manage-container">
        <div className="event-container">
          {/* Render each event */}
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
                <div className="event-buttons">
                  {/* Edit button */}
                  <button
                    onClick={() => handleEdit(event._id)}
                    className="editButton"
                  >
                    Edit
                  </button>
                  {/* Cancel button */}
                  <button
                    onClick={() => handleCancel(event._id)}
                    className="cancelButton"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
