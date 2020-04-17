const db = require("./db");
const { Movie } = db.models;

// async IIFE
(async () => {
  await db.sequelize.sync({ force: true }); // method, which automatically creates or updates your database tables
  try {
    //await sequelize.authenticate(); // test the connection to the db
    // console.log("Connection to the database successful!");

    const movieRows = await Promise.all([
      await Movie.create({
        title: "Toy Story",
      }),

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
