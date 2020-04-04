const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// PROMISES
// --------
// getUsers() still returns a Promise
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
// Takes the promise from getUsers using a "await" call
// and a try/catch block
// Note that async uses TRY/catch blocks
// Simple promise processing will use THEN/catch blocksthen

app.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.render("index", { title: "USERS", users: users.users });
  } catch (err) {
    res.render("error", { error: err });
  }
});

app.listen(3000, () => console.log("App listening on port 3000!"));
