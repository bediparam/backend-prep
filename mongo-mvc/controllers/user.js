const express = require("express");
const User = require("../models/User");

async function getUsers(req, res) {
  const users = await User.find({});
  res.json(users);
}

async function createUser(req, res) {
  const { name, email, age } = req.body;
  const user = await User.create({
    name: name,
    email: email,
    age: age,
  });
  res.status(201).json(user);
}

async function deleteUser(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  res.json(user);
}

async function updateUser(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });
  res.json(user);
}

module.exports = { getUsers, createUser, deleteUser, updateUser };
