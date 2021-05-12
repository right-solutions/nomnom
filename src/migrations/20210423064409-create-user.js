'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING, // TODO: Uppercase
        required: true
      },
      lastName: {
        type: Sequelize.STRING, // TODO: Uppercase
        required: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        required: true
      },
      gender: {
        type: Sequelize.STRING,
        required: true
      },
      dateOfBirth: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: null
      },
      country: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      city: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      mobileNumber: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      language: {
        type: Sequelize.STRING,
        defaultValue: 'en'
      },
      accessToken: {
        type: Sequelize.STRING(10000) // TODO: Add Tokens
      },
      password: {
        type: Sequelize.STRING,
        required: true,
        validate: {
          notEmpty: true,
          len: [7, 72]
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};