const express = require("express");
const users = require("./users.json");
const app = express();
app.use(express.urlencoded({ extended: true }));
const fs = require("fs");

const fsUpdateUsers = (description, res) => {
  fs.writeFile("./users.json", JSON.stringify(users), (err, data) => {
    if (err) res.send(err);
    return res.json(description);
  });
};

app
  .route("/api/users/")
  .get((req, res) => {
    return res.json({ users });
  })
  .post((req, res) => {
    let user = req.body;
    users.push({ id: users.length + 1, ...user });
    fsUpdateUsers("user added!", res);
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    let user = users.find((user) => user.id == id);
    return res.json({ user });
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    let userIndex = users.findIndex((user) => user.id == id);
    if (userIndex) {
      const updatedUser = {
        ...users[userIndex],
        ...req.body,
      };
      users[userIndex] = updatedUser;
      fsUpdateUsers("user updated", res);
    }
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    let userIndex = users.findIndex((user) => user.id == id);
    if (userIndex) {
      users.splice(userIndex, 1);
      fsUpdateUsers("user deleted", res);
    }
  });

app.listen(8000, () => {
  console.log("server is running");
});
