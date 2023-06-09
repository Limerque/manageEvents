const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// User signup controller
exports.signup = async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      isAdmin,
    });

    await user.save();

    res.json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      "secret-key"
    );

    res.json({ token, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
