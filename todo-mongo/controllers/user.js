const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../services/auth");

const User = require("../models/User");

async function createUser(req, res) {
  const { name, email, password } = req.body;
  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });
  return res.redirect("/login");
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
    res.redirect("/todo");
  }
}
module.exports = { createUser, loginUser };
