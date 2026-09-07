const express = require("express");
const app = express();
const logger = require("./middlewares/logger");
const connectDB = require("./configs/db");
const userRouter = require("./routes/user");

app.use(express.urlencoded({ extended: true }));
connectDB();

// app.use(logger);
app.use("/api/users", logger, userRouter);

app.listen(8000, () => {
  console.log("server is running");
});
