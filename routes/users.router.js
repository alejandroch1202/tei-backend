const express = require("express");
const tei_db = require("../db/tei_db.json");

const router = express.Router();

// Get all users device database
router.get("/", (req, res) => {
  res.json(tei_db);
});

router.get("/:user_id", (req, res) => {
  const { user_id } = req.params;
  const index = tei_db.findIndex((element) => element.id_number === user_id);
  const user = tei_db[index];
  res.json(user);
});

module.exports = router;
