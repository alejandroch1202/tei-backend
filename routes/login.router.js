const express = require("express");

const router = express.Router();

// Get all users device database
router.get("/", (req, res) => {
  res.json({
    msg: "Login route",
  });
});

module.exports = router;
