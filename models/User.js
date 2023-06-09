const mongoose = require("mongoose");

// Create a schema for the user data
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
