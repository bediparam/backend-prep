const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Todo = mongoose.model("todos", TodoSchema);

module.exports = Todo;
