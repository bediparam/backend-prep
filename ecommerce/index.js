const express = require("express");
const connectDB = require("./configs/db");
const cookieParser = require("cookie-parser");
const checkAuth = require("./middlewares/checkAuth");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view-engine", "ejs");

// Routes
const productRouter = require("./routes/product");
const staticRouter = require("./routes/static");
const userRouter = require("./routes/user");

connectDB();

app.use(cookieParser());
app.use("/products", checkAuth, productRouter);
app.use("/", staticRouter);
app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("app is running");
});
