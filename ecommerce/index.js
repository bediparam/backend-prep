const express = require("express");
const connectDB = require("./configs/db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view-engine", "ejs");

// Routes
const productRouter = require("./routes/product");
const staticRouter = require("./routes/static");
const userRouter = require("./routes/user");

connectDB();

app.use("/products", productRouter);
app.use("/", staticRouter);
app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("app is running");
});
