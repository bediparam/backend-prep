const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  age: { type: Number },
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
