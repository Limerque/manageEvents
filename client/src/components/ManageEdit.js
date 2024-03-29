import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Logo from "../Logo.png";
import "./ManageEdit.css";

const ManageEdit = () => {
  const [eventName, setEventName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    // Fetch event data for editing
    fetch(`http://localhost:5000/manage/events/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the state with the fetched data
        setEventName(data.eventName);
        setOrganizer(data.organizer);
        setDate(data.date);
        setTime(data.time);
        setPlace(data.place);
        setDescription(data.description);
        setPrice(data.price);
        setImagePreview(data.image); // Set the image preview from the fetched data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  const handleEditEvent = (e) => {
    e.preventDefault();

    const eventData = {
      eventName,
      organizer,
      date,
      time,
      place,
      description,
      price,
      image: imagePreview, // Pass the image preview URL instead of the file
    };

    // Update the event data with the PUT request
    fetch(`http://localhost:5000/manage/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Reset form values
        setEventName("");
        setOrganizer("");
        setDate("");
        setTime("");
        setPlace("");
        setDescription("");
        setPrice("");
        setImagePreview(null);

        history.push("/manage");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The `result` property contains the data URL string
        const imageData = reader.result;
        setImagePreview(imageData); // Corrected: Replace `setImage` with `setImagePreview`
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav>
        <img src={Logo} alt="Logo" />
        <h1>Manage</h1>
        <div className="right-links">
          <Link to="/" className="logout">
            Log out
          </Link>
        </div>
      </nav>
      <hr />
      {/* Form */}
      <form onSubmit={handleEditEvent}>
        {/* Image upload */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Event Preview"
            className="image-preview"
          />
        )}
        <input
          className="image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {/* Event details */}
        <div className="event-details">
          <input
            className="EventName"
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
          <input
            className="Organizer"
            type="text"
            placeholder="Organizer"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            required
          />
        </div>
        {/* Date and time */}
        <div className="date-time">
          <input
            className="Date"
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            className="Time"
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        {/* Other input fields */}
        <input
          className="Place"
          type="text"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
        <input
          className="Description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          className="Price"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        {/* Submit button */}
        <button type="submit" className="save">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ManageEdit;
