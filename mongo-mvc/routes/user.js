const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").delete(deleteUser).patch(updateUser);

module.exports = router;
