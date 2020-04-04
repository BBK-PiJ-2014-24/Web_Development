const LoggerClass = require("./Logger");

const LoggerObj = new LoggerClass();

// Creates a Listener Function, waiting for "create_id" signal to be emitted. Holds a callback function to be executed once
// received the emitted signal named "create_id"
LoggerObj.on("create_id", (data) => {
  console.log(`Listener activated - User Id set up: `, data);
});

LoggerObj.create_id_func("Stewart"); // Emit a created ID
