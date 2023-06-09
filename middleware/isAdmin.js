const jwt = require("jsonwebtoken");

// Middleware function to check if user is an admin
const isAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, "secret-key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    if (!decoded.isAdmin) {
      return res.status(403).json({ error: "Access denied" });
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = isAdmin;
