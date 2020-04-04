const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

const colors_array = ["red", "orange", "yellow", "green", "blue", "purple"];

// Add MiddleWare to the Express App
// ---------------------------------
app.use(bodyParser.urlencoded({ extended: false })); // sets format for received postpost (must be called first)
app.use(cookieParser());

// Set the App to Read Pug Files
// -----------------------------
app.set("view engine", "pug");

// Home Page
// ---------
app.get("/", (req, res) => {
  //res.send(`<h1> I Love TreeHouse</h1>`);
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name: name });
  } else {
    res.redirect("/hello");
  }
}); // '/' root or location parameter

// Card Page
// ---------
app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "This is the prompt variable insertion",
    colors_array
  });
  res.locals.prompt2 = `This is another injection method`;
}); // '/' root or location parameter

// Hello Page
// ----------
app.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
});

app.post("/hello", (req, res) => {
  console.log("msg received");
  console.log(req.body);
  //res.send("Name Sent Back To Server");
  res.cookie("username", req.body.username);
  // res.render("hello", { name: req.body.username });
  res.redirect("/");
});

// GoodBye Page
// ------------
app.post("/goodbye", (req, res) => {
  console.log("deleting Cookie");
  res.clearCookie("username");
  res.redirect("/hello");
});

// Switch on Server
app.listen(5000, () => {
  console.log("server listening on port 5000");
});
