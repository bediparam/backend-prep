const express = require("express");
const connectDB = require("./configs/db");
const app = express();

connectDB();

app.listen(8000, () => {
  console.log("app is running");
});
