'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      city: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      cuisines: {
        type: Sequelize.JSONB,
        defaultValue: []
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      featured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      point: {
        type: Sequelize.GEOMETRY('POINT'),
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
    return queryInterface.dropTable('Restaurants');
  }
};