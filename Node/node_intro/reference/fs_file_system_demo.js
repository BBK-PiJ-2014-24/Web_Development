const fs = require("fs");
const path = require("path");

//callback functions are in asynchronus functions to

// Create Folder called /test
// --------------------------
// fs.mkdir(path.join(__dirname, "/test"), {}, function(err) {
//   if (err) throw err;
//   console.log("Folder Created");
// });

// Create and Write to a file
// --------------------------
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "I am writing in the File",
//   (err) => {
//     if (err) throw err;
//     console.log("File Written to ..");
//   }
// );

// Append to a File
// ----------------
// fs.appendFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "! Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("File Appended");
//   }
// );

// Read File
// ---------
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(`This is the output of the File: ${data}`);
// });

// Rename File
// -----------
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "hello2.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("Renamed File");
//   }
// );
