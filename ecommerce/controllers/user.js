const User = require("../models/User");
const { setUser } = require("../services/auth");
const { v4: uuidv4 } = require("uuid");

async function createUser(req, res) {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  res.redirect("/login");
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    res.render("../views/login.ejs", { error: "Invalid Username or Password" });
  } else {
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    res.redirect("/products");
  }
}

module.exports = { createUser, loginUser };
