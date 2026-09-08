const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  return res.render("../views/register.ejs");
});

router.get("/login", (req, res) => {
  return res.render("../views/login.ejs");
});

module.exports = router;
