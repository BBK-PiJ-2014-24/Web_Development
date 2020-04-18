//the db module has the ORM connection, the tables and the Sequelize library
const db = require("./db");
//grab the movie model table
const { Movie } = db.models;

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
      }),
      // insert row 2 in movie table
      await Movie.create({
        title: "The Incredibles",
      }),
    ]);
    const moviesJSON = movieRows.map((m) => m.toJSON());
    console.log(moviesJSON);
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
})();
