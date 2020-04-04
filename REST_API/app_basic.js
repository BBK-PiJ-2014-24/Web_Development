const express = require("express");
const app = express();
const records = require("./records"); // Home Brew ORM to interact with data.json

// Middlware to set format for req.body on requests coming in
// ------------------------------------
app.use(express.json());

// Routes
// ------
app.get("/greetings", (req, res) => {
  res.json({ greeting: "Hello World" }); // Send back a JSON object
});

// Send a GET request to /quotes to read a list of quotes
// async flags function that it will use Promises
// await must be used on any call for a Promise
app.get("/quotes", async (req, res) => {
  try {
    const quotes = await records.getQuotes();
    res.json(quotes);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Send a GET request to /quotes/:id to READ(view) a quote
app.get("/quotes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const quote = await records.getQuote(id);
    if (quote) {
      res.json(quote);
    } else {
      res.json({ message: "No ID matching in Records" });
    }
  } catch (err) {
    res.status(404).json({ message: "Quote ID Not Found" });
  }
});

// Send a POST request to /quotes to create a new quote
app.post("/quotes", (req, res) => {
  try {
    // throw new Error("My Error");
    if (req.body.author && req.body.quote) {
      const quote = records.createQuote({
        quote: req.body.quote,
        author: req.body.author
      });
      res.status(201).json(quote);
    } else {
      res.status(400).json({ message: "Missing Author and Quote" });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: err.message });
  }
});

// Send a PUT request to /quotes
app.put("/quotes/:id", async (req, res) => {
  try {
    const quote = await records.getQuote(req.params.id);
    console.log(quote);
    if (quote) {
      quote.quote = req.body.quote; // query string passed in the req.body
      quote.author = req.body.author;
      console.log(JSON.stringify(quote.author));
      await records.updateQuote(quote); // As updateQuote is async, it too must use await.
      res.status(204).end(); // 204 - Post Done With No Error // 204 - Post Done With No Error
    } else {
      res.status(404).json({ message: "Quote Does Not Exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Send a DELETE REQUEST to /quotes/:id
// ------------------------------------

app.delete("/quotes/:id", async (req, res) => {
  try {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      await records.deleteQuote(quote);
      res.status(204).end();
    } else {
      res.status(500).json({ message: err.message });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => console.log("Quote API listening on port 5000!"));
