const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));

// if password has special characters, you have to encode it.
const password = encodeURIComponent("hello@#123");

mongoose
  .connect(
    `mongodb+srv://param:${password}@mongodbtutorial.naygist.mongodb.net/?appName=mongodbTutorial/mongo-users`,
  )
  .then(() => {
    console.log("db is connected");
  });

// user schema(it is the definition of values entered in the data)
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
  },
  //   timestamps add createdAt and updatedAt along with data
  { timestamps: true },
);

// user model (it is the controller that controls the CRUD operations for a schema)
// here we are creating a collection called users with userSchema
// model name should start with a Capital letter
const UserModel = mongoose.model("users", userSchema);

app.get("/api/users", async (req, res) => {
  // empty braces means all documents
  const users = await UserModel.find({});
  return res.json(users);
});

app.get("/api/users/:id", async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  return res.json(user);
});

app.delete("/api/users/:id", async (req, res) => {
  const user = await UserModel.findByIdAndDelete(req.params.id);
  return res.json(user);
});

app.patch("/api/users/:id", async (req, res) => {
  const user = await UserModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
  });
  return res.json(user);
});

app.post("/api/users", async (req, res) => {
  let { name, email } = req.body;
  let data = await UserModel.create({ name: name, email: email });
  console.log(data);
  return res.json("new user added");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8000, () => {
  console.log("app is listening");
});
