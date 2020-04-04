const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

// Set the App to Read Pug Files
// -----------------------------
app.set("view engine", "pug");

// Add MiddleWare to the Express App
// ---------------------------------
app.use(bodyParser.urlencoded({ extended: false })); // sets format for received postpost (must be called first)
app.use(cookieParser());

// Add Static CSS, HTML files
// --------------------------
app.use("/static", express.static("public")); // add via /static route

// Include Routes of all Pages on the Website
// ------------------------------------------
const mainRoutes = require("./routes"); //own routes module. No need to refer file if =index
const cardRoutes = require("./routes/cards");
app.use(mainRoutes);
app.use("/cards", cardRoutes);

// MiddleWare
// ----------
app.use((req, resp, next) => {
  console.log("step 1");
  const err = new Error("I am throwing an Error"); // Create Error Object
  err.status = 500; // Add stats property to object
  next(err);
  //next();
});

app.use((req, resp, next) => {
  console.log("step 2");
  next();
});

// MiddleWare Error Handlers
// -------------------------
app.use((err, req, res, next) => {
  res.locals.error = err; // attach the err to the res object
  res.status(err.status);
  res.render("error_page");
});

// Switch on Server
app.listen(5000, () => {
  console.log("server listening on port 5000");
});
