const express = require("express");
const connectDB = require("./configs/db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view-engine", "ejs");

// Routes
const productRouter = require("./routes/product");

connectDB();

app.use("/products", productRouter);

app.listen(8000, () => {
  console.log("app is running");
});
