const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = 5000; // process.env.PORT

const server = http.createServer((req, res) => {
  // build file path which allow the server to pick up the html files
  let filePath = path.join(
    __dirname,
    "WebPages",
    req.url === "/" ? "index.html" : req.url // note that put 'about.html' into google
  );
  //console.log(`The filePath: ${filePath}`);
  //console.log(`The req.url: ${req.url}`);
  //
  // get the file's extension and create its content type
  let extname = path.extname(filePath);
  let contentType = setContentType(extname);
  console.log(contentType);
  //
  // Read the appropropiate html file; the output of the file goes into the 'content' argument of the callback function
  // which either deals with an error or packages the content into a res.write() function that sends the html back to the
  // client.
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page Not Found
        fs.readFile(
          path.join(__dirname, "WebPages", "404_error.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server is Down: ${err.code}`);
      }
    } else {
      // success response
      console.log("file sent");
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

// helper function to set Content Type
function setContentType(ext) {
  let contentType = "text/html";

  switch (ext) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case "jpg":
      contentType = "image/jpg";
      break;
  }
  return contentType;
}
