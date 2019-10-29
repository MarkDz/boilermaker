const path = require("path");
const express = require("express");
const app = express();

const morgan = require("morgan");

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", require("./api")); // include our routes!

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/components/index.html"));
}); // Send index.html for any other requests
// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});
module.exports = app;
