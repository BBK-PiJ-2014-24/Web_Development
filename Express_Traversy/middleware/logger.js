// Middleware are functions that can manipulate the res, req objects
//-------------------------------------------------------------------

const moment = require("moment"); // Module for DateTime objects

// Logger MiddleWare
// -----------------
const logger = (req, res, next) => {
  console.log("Logger Middleware activated");
  const protocol = req.protocol; //http
  const host = req.get("host"); // localhost:5000
  const url = req.originalUrl; // api/members
  const dateTime = moment().format();
  console.log(`${protocol}://${host}.${url}.${dateTime}`);
  next();
};

module.exports = logger;
