'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserWeights', [
      {
        userId: 1,
        restaurantId: 1,
        weight: 42.25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        restaurantId: 1,
        weight: 12.12,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserWeights', null, {});
  }
};
