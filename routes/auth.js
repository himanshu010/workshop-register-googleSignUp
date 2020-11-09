const express = require("express");
const passport = require("passport");
const pass = require("./");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    console.log(req.user);
    res.redirect("/success?id=" + req.user.googleId);
  }
);

module.exports = router;
