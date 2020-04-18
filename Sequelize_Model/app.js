// App.js
// ------
// The file that runs the data insertions and queries

//the db module has the ORM connection, the tables and the Sequelize library
const db = require("./db");
//grab the movie model table
const { Movie, Person } = db.models;

// async IIFE automatically runs the table inserts
(async () => {
  await db.sequelize.sync({ force: true }); // method, which automatically creates or updates your database tables
  try {
    //await sequelize.authenticate(); // test the connection to the db
    // console.log("Connection to the database successful!");

    // wrap ALL insertions in a promise
    const movieRows = await Promise.all([
      // insert row 1 in movie table
      await Movie.create({
        title: "Toy Story",
        runtime: 81,
        releaseDate: "1995-11-22",
        isAvailableOnVHS: true,
      }),
      // insert row 2 in movie table
      await Movie.create({
        title: "The Incredibles",
        runtime: 115,
        releaseDate: "2004-04-14",
        isAvailableOnVHS: true,
      }),
      // insert row 1 in Person table
      await Person.create({
        firstName: "Tom",
        lastName: "Hanks",
      }),
    ]);
    const moviesJSON = movieRows.map((m) => m.toJSON());
    console.log(moviesJSON);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      const reportErrors = err.errors.map((e) => e.message);
      console.error("Validation Errors: ", reportErrors);
    } else {
      throw err;
    }
  }
})();
