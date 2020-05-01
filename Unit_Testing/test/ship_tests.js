var expect = require("chai").expect;

describe("Check for Ship Suite", () => {
  var checkForShip = require("../game_logic/ship_methods").checkForShip;
  var player;
  // Set Up
  before(() => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
        {
          locations: [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
          ],
        },
      ],
    };
  });
  it("Check for Miss Ship at Players Co-ord", () => {
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("Check for Hit Ship at Players Co-ord", () => {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });

  it("Check for Multiple Co-ords", () => {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("Check for Multiple Ships", () => {
    expect(checkForShip(player, [0, 0])).deep.equal(player.ships[0]); //ship 1
    expect(checkForShip(player, [0, 1])).deep.equal(player.ships[0]);
    expect(checkForShip(player, [1, 0])).deep.equal(player.ships[1]); // ship 2
    expect(checkForShip(player, [1, 1])).deep.equal(player.ships[1]);
    expect(checkForShip(player, [2, 0])).deep.equal(player.ships[2]); // ship 3
    expect(checkForShip(player, [2, 1])).deep.equal(player.ships[2]);
    expect(checkForShip(player, [2, 2])).deep.equal(player.ships[2]);
    expect(checkForShip(player, [2, 3])).deep.equal(player.ships[2]);
    expect(checkForShip(player, [9, 9])).to.be.false; // missile miss
  });
});

describe("Ship Damage Test Suite", () => {
  it("Test that Ship Object Can Hold Damage Coordinates", () => {
    var damageShip = require("../game_logic/ship_methods").damageShip;

    var ship = {
      locations: [[0, 0]],
      damage: [],
    };

    damageShip(ship, [0, 0]);
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});

describe("Test Suite for Player Firing Hit", () => {
  var fire = require("../game_logic/ship_methods").fire;
  // SET UP Before Each
  // ------------------
  var player;
  beforeEach(() => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: [],
        },
      ],
    };
  });

  it("Test a Fire at a given coordinate", () => {
    fire(player, [0, 0]);

    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });

  it("Test a Fire at a given coordinate", () => {
    fire(player, [9, 9]);

    expect(player.ships[0].damage).to.be.empty;
  });

  // TEAR DOWN
  // ---------
  after(() => {
    console.log("**** End of Test Suite ****");
  });
});
