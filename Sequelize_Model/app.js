const Sequelize = require("sequelize");

const sequelize = new Sequelize({ dialect: "sqlite", storage: "movies.db" }); // storage ref to database

// Create a table/model class that extends Sequelize.Model
class Movie extends Sequelize.Model {}

// Initialize the table/model with title column
Movie.init(
  {
    title: Sequelize.STRING,
  },
  { sequelize }
);

// async IIFE
(async () => {
  await sequelize.sync({ force: true }); // method, which automatically creates or updates your database tables
  // Calling sync({ force: true }) issues a DROP TABLE IF EXISTS statement, which completely deletes the table, before issuing the CREATE TABLE IF NOT EXISTS statement. In other words, it will drop a table that exists, each time you start your app, and recreate it from the model definition.
  try {
    await sequelize.authenticate(); // test the connection to the db
    console.log("Connection to the database successful!");
    const movie = await Movie.create({
      title: "Toy Story",
    });
    console.log(movie.toJSON());
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
})();
