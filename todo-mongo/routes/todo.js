const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodo,
  markCompleted,
  getCompletedTodos,
  deleteTodo,
} = require("../controllers/todo");

router.get("/", getTodos);
router.post("/", createTodo);

router.get("/completed", getCompletedTodos);

router.post("/:id/complete", markCompleted);

router.post("/:id/delete", deleteTodo);

module.exports = router;
