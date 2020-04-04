const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// PROMISES
// ---------
// Returns the data in a promise - Very simple!
// Before the data had to be packaged back into callback via an argument.
function getUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const users = JSON.parse(data); // data is a string
        resolve(users);
      }
    });
  });
}

// app.get()
// ---------
// Takes the promise from getUsers
// Then chains the promise with then() and catch() blocks
app.get("/", (req, res) => {
  getUsers()
    .then((users) => {
      res.render("index", { title: "USERS", users: users.users });
    })
    .catch((err) => {
      res.render("error", { error: err });
    });
});

app.listen(3000, () => console.log("App listening on port 3000!"));
