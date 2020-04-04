const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

function asynchHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      res.render("error", { error: err });
    }
  };
}

// PROMISES
function getUsers(cb) {
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

// asyc route
// ----------
app.get(
  "/",
  asynchHandler(async (req, res) => {
    const users = await getUsers();
    res.render("index", { title: "USERS", users: users.users });
  })
);

app.listen(3000, () => console.log("App listening on port 3000!"));
