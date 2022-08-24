const express = require("express");

const app = express();
const port = 3000;
const tei_db = [];
const tei_db_data = [];

// This should be only for admins
// ------------------------------

// Get all clients data
app.get("/tei/api/v1/users/db/", (req, res) => {
  res.json(tei_db);
});

// Get all users device database
app.get("/tei/api/v1/users/", (req, res) => {
  res.json(tei_db_data);
});

// This should be for users
// ------------------------

// Get specific user device status 
app.get("/tei/api/v1/users/:id/status/", (req, res) => {
  const { id } = req.params;
  res.json(reqSong);
});

// Running the server
app.listen(port, () => {
  console.log(`TEI API listening on port ${port}`);
});