// routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/login", (req,res) => {
  // TODO: validate user
  const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET);
  res.json({ token });
});
module.exports = router;