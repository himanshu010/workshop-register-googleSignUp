const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    require: true,
  },
  displayName: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    require: true,
  },
  msg: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
