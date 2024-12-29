const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  console.log("Request received at /");
  res.json({ message: "Hello" });
});

module.exports = app;
