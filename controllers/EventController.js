const Event = require("../models/Event");

// Route to get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route to get a specific event by ID (accessible to all users)
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate(
      "registeredUsers"
    );
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route to get all events (only accessible to admins)
exports.getAllEventsForAdmin = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route to add a new event (only accessible to admins)
exports.createEvent = async (req, res) => {
  try {
    const {
      eventName,
      organizer,
      date,
      time,
      place,
      description,
      price,
      image,
    } = req.body;

    const event = new Event({
      eventName,
      organizer,
      date,
      time,
      place,
      description,
      price,
      image,
    });

    await event.save();

    res.json({ message: "Event added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route to update an event by ID (only accessible to admins)
exports.updateEventById = async (req, res) => {
  try {
    const {
      eventName,
      organizer,
      date,
      time,
      place,
      description,
      price,
      image,
    } = req.body;

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    event.eventName = eventName;
    event.organizer = organizer;
    event.date = date;
    event.time = time;
    event.place = place;
    event.description = description;
    event.price = price;
    event.image = image;

    await event.save();

    res.json({ message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route to delete an event by ID (only accessible to admins)
exports.deleteEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    await event.deleteOne();

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
