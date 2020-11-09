const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const mongoose = require("mongoose");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.render("register");
});

router.get("/success", ensureAuth, async (req, res) => {
  try {
    const googleId = req.query.id;
    const user = await User.findOne({ googleId });
    res.render("success", {
      id: googleId,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.displayName,
      msg: user.msg,
      image: user.image,
    });
  } catch (err) {
    res.render("error", { err });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    let registered = [];
    for (let i = 0; i < users.length; i++) {
      let obj = users[i];
      registered.push(obj);
    }

    let register = { registered };
    console.log(register);
    res.render("users", register);
  } catch (err) {
    res.render("error", { err });
  }
});

// router.get("*", async (req, res) => {
//   res.render("error", { err: "404: Not Found" });
// });

module.exports = router;
