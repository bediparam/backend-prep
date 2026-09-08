const express = require("express");
const Todo = require("../models/Todo");

async function getTodos(req, res) {
  let todos = await Todo.find({ isCompleted: false });
  res.render("index.ejs", { todos: todos });
}

async function createTodo(req, res) {
  let { title } = req.body;
  let todo = await Todo.create({ title: title });
  res.redirect("/todo");
}

async function markCompleted(req, res) {
  await Todo.findByIdAndUpdate(req.params.id, {
    isCompleted: true,
  });
  res.redirect("/todo");
}

async function getCompletedTodos(req, res) {
  let todos = await Todo.find({ isCompleted: true });
  res.render("completed.ejs", { todos: todos });
}

async function deleteTodo(req, res) {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect("/todo/completed");
}

module.exports = {
  getTodos,
  createTodo,
  markCompleted,
  getCompletedTodos,
  deleteTodo,
};
