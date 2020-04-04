const express = require("express");
const uuid = require("uuid");
const members = require("../../members"); // members.js is outside the /routes/api path

// Create Router
// -------------
const router = express.Router();

// Routes for API
// ===============
// Note that the / file in this file is now '/api/members/'

// GET whole list
router.get("/", (req, res) => {
  res.json(members);
});

// GET single member
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); //req.params.id is a string so needs to be parses to int

  const isMember = members.some((m) => m.id === id); // Check if there is a member id in the list
  if (isMember) {
    const member = members.filter((m) => m.id === id); // Filter to find matching id
    res.status(200).json(member);
  } else {
    res.status(400).json({ msg: `Member Not Found with id: ${id}` });
  }
});

// POST - Create a Member
router.post("/", (req, res) => {
  console.log("inside POST");
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  members.push(newMember);
  res.json(members);
  // res.redirect('/');
});

// Routes for Non API pages
// ---------------------------
// app.get("/greetings", (req, res) => {
//   //  res.send("<h1>Hello World</h1>");
//   res.sendFile(path.join(__dirname, "public", "greetings.html"));
// });

module.exports = router;
