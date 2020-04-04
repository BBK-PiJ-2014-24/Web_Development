var http = require("http");

http
  .createServer(function name(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World\n"); // writes to the web page.
    response.end(); // closes the response
  })
  .listen(8081);

console.log("Server Running on http://127.0.0.1:8081/");
