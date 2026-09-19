const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  return res.render("register.ejs");
});

router.get("/login", (req, res) => {
  return res.render("login.ejs", { error: null });
});

module.exports = router;
