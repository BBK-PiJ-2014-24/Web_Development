const url = require("url");

// Create a URL Object
// -------------------
const myUrl = new URL(
  "http://myWebsite.com:8000/hello.html?id=100&status=active"
);

// Serialize a URL Object
// ----------------------
console.log(`Serialize URL 1: ${myUrl.href}`);
console.log(`Serialize URL 2: ${myUrl.toString()}`);

// Root Domain Page
// ----------------
console.log(`host: ${myUrl.host}`); // includes port
console.log(`hostname: ${myUrl.hostname}`);

// Page's path
// -----------
console.log(`Pathname: ${myUrl.pathname}`);

// Web Page Parameters id, status
// ------------------------------
console.log(`WebPage Parameters: ${myUrl.search}`); // Serialize format
console.log(`WebPage Params in Object: ${myUrl.searchParams.get("status")}`); // Getter: In Object key:value format
console.log(
  `WebPage Params SET in object: ${myUrl.searchParams.append("key", "value")}`
); // Setter in Parameter Object

myUrl.searchParams.forEach((k, v) => {
  console.log(`${k} : ${v}`);
}); // Loop Through key:value Parameters
