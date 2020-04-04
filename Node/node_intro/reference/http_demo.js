const http = require("http");

// Create Server Object
http
  .createServer((req, res) => {
    // Write Response
    res.write("Hello World"); // writes to browser
    res.end(); // closes write
  })
  .listen(5000, () => {
    console.log("Server Running...");
  });
