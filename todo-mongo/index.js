const express = require("express");
const app = express();
const connectDB = require("./configs/db");

// Routes
const todoRouter = require("./routes/todo");

app.use(express.urlencoded({ extended: true }));
app.set("view-engine", "ejs");

connectDB();

app.use("/todo", todoRouter);

app.listen(8000, () => {
  console.log("server is running on localhost:8000");
});
