// App.js
// ------
// The file that runs the data insertions and queries

//the db module has the ORM connection, the tables and the Sequelize library
const db = require("./db");
// grab the Sequelize operators from the db object
const { Op } = db.Sequelize;
//grab the movie model table
const { Movie, Person } = db.models;

// async IIFE automatically runs the table inserts
(async () => {
  await db.sequelize.sync({ force: true }); // method, which automatically creates or updates your database tables
  try {
    //await sequelize.authenticate(); // test the connection to the db
    // console.log("Connection to the database successful!");

    // wrap ALL insertions in a promise
    //const movieRows = await Promise.all([
    // insert row 1 in movie table
    const movie1 = await Movie.create({
      title: "Toy Story",
      runtime: 81,
      releaseDate: "1995-11-22",
      isAvailableOnVHS: true,
    });
    console.log(movie1.toJSON());

    // insert row 2 in movie table
    const movie2 = await Movie.create({
      title: "The Incredibles",
      runtime: 115,
      releaseDate: "2004-04-14",
      isAvailableOnVHS: true,
    });
    console.log(movie2.toJSON());

    // insert row 1 in Person table
    const person1 = await Person.create({
      firstName: "Tom",
      lastName: "Hanks",
    });
    console.log(person1.toJSON());

    // use build+save to insert row 3 in Movie table, allowing insertion of default variables before saving to disc
    const movie3 = await Movie.build({
      title: "Toy Story 3",
      runtime: 103,
      releaseDate: "2010-06-18",
      isAvailableOnVHS: false,
    }).save();
    console.log(movie3.toJSON());

    // select by Primary Key
    const query1 = await Movie.findByPk(1);
    console.log(query1.toJSON());

    // Select * FROM MOVIE ... WHERE ... AND  ....order 1
    const query2 = await Movie.findOne({
      where: { runtime: 115, isAvailableOnVHS: true },
    });
    console.log(query2.toJSON());

    // Select * FROM PERSON .... WHERE ... order 1
    const query3 = await Person.findOne({ where: { firstName: "Tom" } });
    console.log(query3.toJSON());

    // Select id, title FROM MOVIE ...WHERE .... order 1
    const query4 = await Movie.findOne({
      attributes: ["id", "title"],
      where: { runtime: 115 },
    });
    console.log(query4.toJSON());

    // Select * FROM MOVIE ...WHERE  >=, > .....ALL ROWS
    const query5 = await Movie.findAll({
      where: {
        runtime: { [Op.gte]: 95 },
        releaseDate: { [Op.gte]: "2004-01-01" },
      },
    });
    console.log(query5.map((m) => m.toJSON()));

    // Select * FROM MOVIE .... WHERE ....  WILDCARD %
    const query6 = await Movie.findAll({
      where: {
        title: { [Op.endsWith]: "story" },
      },
    });
    console.log(query6.map((m) => m.toJSON()));

    // Select * FROM MOVIE .... WHERE .... BETWEEN
    const query7 = await Movie.findAll({
      where: {
        runtime: { [Op.between]: [75, 115] },
      },
    });
    console.log(query7.map((m) => m.toJSON()));

    // Select * FROM MOVIE .... ORDER DESC
    const query8 = await Movie.findAll({
      order: [["id", "DESC"]], // ORDER BY ID, DESC
    });
    console.log(query8.map((m) => m.toJSON()));

    // UPDATE MOVIE  (SAVE METHOD)
    const updateMovie = await Movie.findByPk(3); // get the movie object in the table
    updateMovie.isAvailableOnVHS = true; //update attribute
    await updateMovie.save(); // save to disc
    console.log(updateMovie.toJSON());

    // UPDATE MOVIE (DIRECT METHOD)
    const updateMovie2 = await Movie.findByPk(3);
    await updateMovie2.update({
      isAvailableOnVHS: false,
    });
    console.log(updateMovie2.toJSON());

    // DELETE MOVIE
    const deleteMovie = await Movie.findByPk(3);
    await deleteMovie.destroy();
    const checkDelete = await Movie.findAll();
    console.log(checkDelete.map((m) => m.toJSON()));
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      const reportErrors = err.errors.map((e) => e.message);
      console.error("Validation Errors: ", reportErrors);
    } else {
      throw err;
    }
  }
})();
