const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = 5000; // process.env.PORT

const server = http.createServer((req, res) => {
  // Check if request from Home Page
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "WebPages", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  // Check if request is from About Page
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "WebPages", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  // Check if request is from api/users Page
  if (req.url === "/api/users") {
    // Some Dummy JSON Data. Normally you make the call to the database.
    const users = [
      { name: "Stewart", age: 50 },
      { name: "Michael", age: 53 }
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, console.log(`Server running on port ${PORT}`));
