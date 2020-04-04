const _ = require("lodash");

const numbers = [33, 46, 76, 44, 32, 5];

_.each(numbers, function(num, i) {
  console.log(num);
});
