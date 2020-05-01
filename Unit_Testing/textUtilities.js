// npm i --save-dev mocha chai

var expect = require("chai").expect;

function titelCasefn(title) {
  var words = title.split(" ");
  var new_words = words.map((w) => w[0].toUpperCase() + w.substring(1));
  return new_words.join(" ");
}

expect(titelCasefn("the great mouse detective")).to.be.a("string");
expect(titelCasefn("a")).is.equal("A");
expect(titelCasefn("vertigo")).to.equal("Vertigo");
expect(titelCasefn("the great mouse detective")).is.equal(
  "The Great Mouse Detective"
);
