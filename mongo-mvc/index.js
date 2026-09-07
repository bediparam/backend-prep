const express = require("express");
const app = express();
const logger = require("./middlewares/logger");

app.use(express.urlencoded({ extended: true }));
app.use(logger);

const connectDB = require("./configs/db");
const userRouter = require("./routes/user");

connectDB();

app.use("/api/users", userRouter);

app.listen(8000, () => {
  console.log("server is running");
});
