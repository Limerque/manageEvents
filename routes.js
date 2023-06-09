const express = require("express");
const router = express.Router();

const UserController = require("./controllers/UserController");
const EventController = require("./controllers/EventController");
const isAdmin = require("./middleware/isAdmin");

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.get("/find/events", EventController.getAllEvents);
router.get("/events/:id", EventController.getEventById);
router.get("/manage/events", isAdmin, EventController.getAllEvents);
router.post("/manage/events", isAdmin, EventController.createEvent);
router.put("/manage/events/:id", isAdmin, EventController.updateEventById);
router.delete("/manage/events/:id", isAdmin, EventController.deleteEventById);

module.exports = router;
