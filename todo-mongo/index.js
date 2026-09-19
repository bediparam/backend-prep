const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./configs/db");
const checkAuth = require("./middlewares/checkAuth");

// Routes
const todoRouter = require("./routes/todo");
const userRouter = require("./routes/user");
const staticRouter = require("./routes/static");

app.use(express.urlencoded({ extended: true }));
app.set("view-engine", "ejs");

connectDB();

app.use(cookieParser());
app.use("/todo", checkAuth, todoRouter);
app.use("/user", userRouter);
app.use("/", staticRouter);

app.listen(8000, () => {
  console.log("server is running on localhost:8000");
});
