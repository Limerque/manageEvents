import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Logo from "../Logo.png";
import "./ManageAdd.css";

const ManageAdd = () => {
  const [eventName, setEventName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const history = useHistory();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The `result` property contains the data URL string
        const imageData = reader.result;
        setImage(imageData);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();

    // Create an object with the event data
    const event = {
      eventName,
      organizer,
      date,
      time,
      place,
      description,
      price,
      image,
    };

    try {
      // Send a request to the server to add the event
      const response = await fetch("http://localhost:5000/manage/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(event),
      });

      if (response.ok) {
        // Reset form values
        setEventName("");
        setOrganizer("");
        setDate("");
        setTime("");
        setPlace("");
        setDescription("");
        setPrice("");
        setImage(null);

        history.push("/manage");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

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
      {/* Add Event form */}
      <form onSubmit={handleAddEvent}>
        {/* Image upload */}
        <input
          className="image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <div className="event-details">
          {/* Event Name input */}
          <input
            className="EventName"
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
          {/* Organizer input */}
          <input
            className="Organizer"
            type="text"
            placeholder="Organizer"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            required
          />
        </div>
        <div className="date-time">
          {/* Date input */}
          <input
            className="Date"
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          {/* Time input */}
          <input
            className="Time"
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        {/* Place input */}
        <input
          className="Place"
          type="text"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
        {/* Description input */}
        <input
          className="Description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {/* Price input */}
        <input
          className="Price"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* Submit button */}
        <button type="submit" className="add">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default ManageAdd;
