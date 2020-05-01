var expect = require("chai").expect;

describe("Check for Ship", () => {
  var checkForShip = require("../game_logic/ship_methods").checkForShip;
  it("Check for No Ship at Players Co-ord", () => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});
