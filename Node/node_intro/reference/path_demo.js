const path = require("path");

// Base file name
console.log("hello");
console.log(`The filename is: ${path.basename(__filename)}`);

// Directory name
console.log(`The directory is: ${path.dirname(__filename)}`);

// The file's extension
console.log(`The file extension is: ${path.extname(__filename)}`);

// Parse the file path into an object
console.log(`The file path object is: ${path.parse(__filename)}`);
console.log(path.parse(__filename));
console.log(
  `Use object key like The path.parse().ext: ${path.parse(__filename).ext}`
);
// Creating a file path with concaternate
console.log(
  `Create a log with path.join(__dirname, 'myFolder', test.txt): ${path.join(
    __dirname,
    "myFolder",
    "test.txt"
  )}`
);
