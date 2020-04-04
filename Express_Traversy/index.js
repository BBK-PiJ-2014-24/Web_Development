const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const api_routes = require("./routes/api/members_api");
const app = express();

const PORT = 5000;

// Initialize Middleware
// ---------------------
app.use(logger); // Everytime a request is made to the server, the middleware is activated.
app.use("/api/members", api_routes); // Set the API route - 'api/members/ is the parent route
app.use(express.json()); // Parser on the req object that converts everything to JSON
app.use(express.urlencoded({ extended: false })); // form submissions

// Routes for Static Web Pages to be found a static folder called Public
// ---------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "public"))); // use is function that calls middleware. N.b. Full name of
// static page (about.html) needs to be called for the static server

app.listen(PORT, () => console.log(`sever running on Port: ${PORT}`));
