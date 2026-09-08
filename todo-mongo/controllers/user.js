const express = require("express");
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
    res.redirect("/login");
  }
  res.redirect("/todo");
}
module.exports = { createUser, loginUser };
