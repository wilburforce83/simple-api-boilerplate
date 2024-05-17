// server.js
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const JSONdb = require("simple-json-db");

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Example data (could be replaced with a database)
const db = new JSONdb("./db/db.json");

// Define your API key
const apiKey = process.env.API_KEY;

// Middleware to check API key
const apiKeyMiddleware = (req, res, next) => {
  const apiKeyHeader = req.headers["x-api-key"];
  if (!apiKeyHeader || apiKeyHeader !== apiKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

// Apply the API key middleware to the routes that need protection
app.use("/protected-route", apiKeyMiddleware);

// GET request to retrieve all users
app.get("/data", (req, res) => {
  let result = db.JSON();
  res.json(result);
});

// Protected route example
app.get("/protected-route/data", (req, res) => {
  let result = db.JSON(); // Example of accessing data with API key protection
  res.json(result);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
