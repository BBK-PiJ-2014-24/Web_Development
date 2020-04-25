"use strict";
const Sequelize = require("sequelize");
const moment = require("moment");

module.exports = (sequelize) => {
  class Article extends Sequelize.Model {
    // Instant Method <=> class method
    publishedAt() {
      const today = moment(this.createdAt).format("MMMM D, YYYY, h:mma");
      return today;
    }
    shortDescription() {
      const shortDescr =
        this.body.length > 200
          ? this.body.substring(0, 200) + "..."
          : this.body;
      return shortDescr;
    }
  }
  Article.init(
    {
      title: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Title Required",
          },
        },
      },
      author: Sequelize.STRING,
      body: Sequelize.TEXT,
    },
    { sequelize }
  );
  return Article;
};
