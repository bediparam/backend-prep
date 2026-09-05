const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view-engine", "ejs");

const password = encodeURIComponent("hello@#123");

mongoose
  .connect(
    `mongodb+srv://param:${password}@mongodbtutorial.naygist.mongodb.net/?appName=mongodbTutorial/mongo-todo`,
  )
  .then(() => {
    console.log("db is connected");
  });

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Todo = mongoose.model("todos", TodoSchema);

app.get("/", async (req, res) => {
  let todos = await Todo.find({ isCompleted: false });
  res.render("index.ejs", { todos: todos });
});

app.get("/completed", async (req, res) => {
  let todos = await Todo.find({ isCompleted: true });
  res.render("completed.ejs", { todos: todos });
});

app.post("/todo", async (req, res) => {
  let { title } = req.body;
  let todo = await Todo.create({ title: title });
  res.redirect("/");
});

app.post("/todo/:id/complete", async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, {
    isCompleted: true,
  });
  res.redirect("/");
});

app.post("/todo/:id/delete", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect("/completed");
});

app.listen(8000, () => {
  console.log("server is running on localhost:8000");
});
