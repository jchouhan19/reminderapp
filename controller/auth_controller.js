let database = require("../database.js");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res, next) => {
    passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/login",
    })(req, res, next);
  },

  registerSubmit: (req, res) => {
    let userID = Math.floor(Math.random() * 100000000001);
    database.append(userID, req.body.name, req.body.username, req.body.password);
    console.log("account successfully made");
    res.render("auth/login");
  },
};

module.exports = authController;
