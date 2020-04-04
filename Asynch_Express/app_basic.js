const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// getUSers() - A high-order function that pre-loads data into a callback func as arg
// --------------------------
// @param cb - a callback function
// 1. Reads a JSON file as a string
// 2. Checks Error
// 3. Converts to JSON object
// 4. return data in a callback function, cb
// 5. Takes cb() and returns cb(err) or cb(null, users)
function getUsers(cb) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) return cb(err);
    const users = JSON.parse(data);
    return cb(null, users); // (null, users) <=> (err, users)
  });
}

// Router for Home Page
// --------------------
// getUser() preloads callback() with data, before the callback is invoked.
app.get("/", (req, res) => {
  getUsers((err, users) => {
    if (err) {
      res.render("error", { error: err });
    } else {
      res.render("index", { title: "Users", users: users.users });
    }
  });
});

app.listen(3000, () => console.log("App listening on port 3000!"));
