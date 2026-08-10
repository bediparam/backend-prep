const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/form", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const { fullName, email, age, color } = req.body;

  res.render("formSubmitted", {
    fullName: fullName,
    email: email,
    age: age,
    color: color,
  });
});

app.listen(8000, () => {
  console.log("server is running on port - 8000");
});
