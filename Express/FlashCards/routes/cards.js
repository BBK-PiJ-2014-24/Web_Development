// This is router for the Quiz Game of Trivia Cards
// ------------------------------------------------
const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json"); // equiv to data = require().data
const { cards } = data; // cards = data.cards

// Card Page
// ---------
router.get("/", (req, res) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor(Math.random() * numberOfCards);
  res.redirect(`/cards/${flashcardId}?side=question`);
});

// id is a route parameter added to the end of the url
router.get("/:id", (req, res) => {
  const { id } = req.params; // parameter of url
  const { side } = req.query; // query-string: side is either the Question or Answer of the Card

  if (!side) {
    return res.redirect(`/cards/${id}?side=question`); // set default side to question
  }
  const name = req.cookies.username;
  const text = cards[id][side];
  const { hint } = cards[id]; // hint = cards[id].hint

  const templateData = { id, text, name };
  if (side === "question") {
    templateData.hint = hint; // add hint to page if showing the question
    templateData.sideToShow = "answer";
    templateData.sideToShowDisplay = "Answer";
  } else {
    templateData.sideToShow = "question";
    templateData.sideToShowDisplay = "Question";
  }
  res.render(
    "card",
    templateData
    // prompt: cards[req.params.id].question,
    // hint: cards[req.params.id].hint
  );
});

module.exports = router;
