// This is a basic webpage router
// -------------------------------
const express = require("express");

const router = express.Router();

// Home Page
// ---------
router.get("/", (req, res) => {
  //res.send(`<h1> I Love TreeHouse</h1>`);
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name: name });
  } else {
    res.redirect("/hello");
  }
});

// '/' root or location parameter
// Hello Page
// ----------
router.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
});

router.post("/hello", (req, res) => {
  console.log("msg received");
  console.log(req.body);
  //res.send("Name Sent Back To Server");
  res.cookie("username", req.body.username);
  // res.render("hello", { name: req.body.username });
  res.redirect("/");
});

// GoodBye Page
// ------------
router.post("/goodbye", (req, res) => {
  console.log("deleting Cookie");
  res.clearCookie("username");
  res.redirect("/hello");
});

module.exports = router;
