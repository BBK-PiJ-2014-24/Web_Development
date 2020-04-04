const EventEmitter = require("events");

// Create Emitter Class
// --------------------
class MyEmitterClass extends EventEmitter {}

// Init Object
const myEmitterObject = new MyEmitterClass();

// Event Listener
myEmitterObject.on("event_name", () => console.log("Event Fired")); // .on(event_name, listener_function()) registers a listener that is interested in listening to event_name

// Fire Event
myEmitterObject.emit("event_name"); // .emit(event_name) triggers an event signal for the name event_name
