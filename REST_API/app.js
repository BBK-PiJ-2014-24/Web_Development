const express = require("express");
const app = express();
const records = require("./records"); // Home Brew ORM to interact with data.json
const routes = require("./routes"); // Access the routes in the routes.js directory

// Middlware to set format for req.body on requests coming in
// ------------------------------------
app.use(express.json());
app.use("/api", routes); // if routes have /api/ path use the routes in the 'routes' file

app.listen(5000, () => console.log("Quote API listening on port 5000!"));
