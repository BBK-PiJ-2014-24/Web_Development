const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Person extends Sequelize.Model {}

  Person.init(
    {
      firstName: {
        type: Sequelize.STRING,
        validate: { allowNull: false, notEmpty: false },
      },
      lastName: {
        type: Sequelize.STRING,
        validate: { notNull: false, notEmpty: false },
      },
    },
    { sequelize }
  );
  return Person;
};
//
