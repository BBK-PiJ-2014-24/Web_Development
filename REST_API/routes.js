const express = require("express");
const router = express.Router(); // create a rounter object that contain all routes, which can then be exported in the module
const records = require("./records"); // Home Brew ORM to interact with data.json

// Middleware - Error Handling
// ----------------------------
// wrap any call back (cb) in a try/catch block
function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

// Routes
// ------
router.get("/greetings", (req, res) => {
  res.json({ greeting: "Hello World" }); // Send back a JSON object
});

// Send a GET request to /quotes to read a list of quotes
// async flags function that it will use Promises
// await must be used on any call for a Promise
router.get(
  "/quotes",
  asyncHandler(async (req, res) => {
    const quotes = await records.getQuotes();
    res.json(quotes);
  })
);

// Send a GET request to /quotes/:id to READ(view) a quote
router.get(
  "/quotes/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const quote = await records.getQuote(id);
    if (quote) {
      res.json(quote);
    } else {
      res.json({ message: "No ID matching in Records" });
    }
  })
);

// Send a GET request for a random quote
router.get(
  "/quotes/quote/random",
  asyncHandler(async (req, res) => {
    const quote = await records.getRandomQuote();
    res.json(quote);
  })
);

// Send a POST request to /quotes to create a new quote
router.post(
  "/quotes",
  asyncHandler(async (req, res) => {
    console.log("Inside POST");
    if (req.body.author && req.body.quote) {
      const quote = records.createQuote({
        quote: req.body.quote,
        author: req.body.author
      });
      res.status(201).json(quote);
    } else {
      res.status(400).json({ message: "Missing Author and Quote" });
    }
  })
);

// Send a PUT request to update /quotes
router.put(
  "/quotes/:id",
  asyncHandler(async (req, res) => {
    const quote = await records.getQuote(req.params.id); // Get quote from database
    if (quote) {
      quote.quote = req.body.quote; // query string passed in the req.body
      quote.author = req.body.author;
      await records.updateQuote(quote); // As updateQuote is async, it too must use await.
      res.status(204).end(); // 204 - Post Done With No Error // 204 - Post Done With No Error
    } else {
      res.status(404).json({ message: "Quote Does Not Exist" });
    }
  })
);

// Send a DELETE REQUEST to /quotes/:id
// ------------------------------------
router.delete(
  "/quotes/:id",
  asyncHandler(async (req, res) => {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      await records.deleteQuote(quote);
      res.status(204).end();
    } else {
      res.status(500).json({ message: err.message });
    }
  })
);

module.exports = router;
