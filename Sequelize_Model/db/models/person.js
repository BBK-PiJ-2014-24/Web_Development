const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Person extends Sequelize.Model {}

  Person.init(
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Null not allowed" },
          notEmpty: { msg: "Empty Not Allowed" },
        },
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Null not allowed" },
          notEmpty: { msg: "Not Empty Not Allowed" },
        },
      },
    },
    { sequelize }
  );
  return Person;
};
//
