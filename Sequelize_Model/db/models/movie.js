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
      // set custom primary key
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Provide Title" },
          notEmpty: { msg: "Provide Title" },
        },
      },
      runtime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: { args: 1, msg: "time must be > 1min" },
        },
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {},
      },

      isAvailableOnVHS: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { sequelize }
  );

  return Movie;
};
