const Sequelize = require("sequelize");

// Instantiate Sequelize object that makes the Connection to the DB. Nb. This is an instantiation for Sqlite. This constructor is overloaded for diff db's
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
  // logging: true,
});

// Create a db object with 3 properties
// sequelize - the ORM connection to the DB
// Sequelize - the Sequelize program. A convenicence so that you automcatically call it without requiring it
// models - an object to contain the tables, to be populated in the next line ....
const db = { sequelize, Sequelize, models: {} };

// Populate the model object (within the db) by requiring the movie.js.
// movie.js instantiates and inits the movie model-table, but you need to pass it the sequelize connection object
db.models.Movie = require("./models/movie.js")(sequelize);

// model exports the db, which has the ORM connection, the tables and the Sequelize library
module.exports = db;
