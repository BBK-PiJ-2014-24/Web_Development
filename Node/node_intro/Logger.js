const EventEmmiter = require("events");
const uuid = require("uuid");

class Logger extends EventEmmiter {
  // This is an emitter function
  create_id_func(user_name) {
    // call event
    this.emit("create_id", { user_name, id: uuid.v4() });
  }
}

module.exports = Logger;
