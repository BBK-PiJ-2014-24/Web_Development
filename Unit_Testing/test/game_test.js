var expect = require("chai").expect;

describe("GAME INSTANCE FUNCTIONS", function () {
  describe("checkGameStatus", function () {
    var checkGameStatus = require("../game_logic/game_instance.js")
      .checkGameStatus;
    it("should tell me when the game is over", function () {
      var players = [
        {
          ships: [
            {
              locations: [[0, 0]],
              damage: [[0, 0]],
            },
          ],
        },
      ];
      var actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });
});

describe("taketurn", () => {
  var takeTurn = require("../game_logic/game_instance").takeTurn;
  var guess, player;

  beforeEach(() => {
    guess = () => {
      return [0, 0];
    };

    player = {
      ships: {
        locations: [[0, 0]],
        damage: [],
      },
    };
  });

  it("should return false if game ends", () => {
    var action = takeTurn(player, guess);
    expect(action).to.be.false;
  });
});

// Asynchronous Testing
// ----------------------
function saveGame(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

describe("saveGame", () => {
  it("should update save status", (done) => {
    /// pass "done" as argument
    var status = "Game Not Saved";
    saveGame(() => {
      status = "Game Saved";
      expect(status).to.be.equal("Game Saved");
      done(); // this marks the pt that the expect is run.
    });
  });
});
