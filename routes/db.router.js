const express = require("express");
const tei_db_data = require("../db/tei_db_data.json");

const router = express.Router();

// Get all clients data
router.get("/", (req, res) => {
  res.json(tei_db_data);
});

router.get("/:user_id", (req, res) => {
  const { user_id } = req.params;
  const index = tei_db_data.findIndex( (element) => element.id_number === user_id );
  const user = tei_db_data[index];
  res.json(user);
});

module.exports = router;
