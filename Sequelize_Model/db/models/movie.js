// movie.js
// -------
// 1. Instantiates a model-table object, which is the abstract mapping of a table
// 2. Initializes the table-model with (schema, an instantiated sequelize object) as arguments
// 3. module exports this table-model, BUT the sequelize object (which is the ORM connection to the database) is passed as an ARGUMENT.

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}

  Movie.init(
    {
      title: Sequelize.STRING,
    },
    { sequelize }
  );

  return Movie;
};
