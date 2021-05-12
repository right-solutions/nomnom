'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [
      {
        name: 'My Square',
        verified: true,
        featured: true,
        country: 'United Arab Emirates',
        city: 'Dubai',
        address: 'Doubletree by Hilton Dubai Business Bay - building 5 - Bay Square - Dubai',
        cuisines: JSON.stringify(['Arabic', 'Lebanese', 'Egyptian', 'Italian - American']),
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bikanervala Bay Avenue - Indian Buffet Restaurant Dubai',
        verified: true,
        featured: true,
        country: 'United Arab Emirates',
        city: 'Dubai',
        address: 'Bay Avenue Food Court, First Floor - Dubai',
        cuisines: JSON.stringify(['North Indian', 'South Indian']),
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tulum Restaurant',
        verified: false,
        featured: false,
        country: 'United Arab Emirates',
        city: 'Dubai',
        address: 'The Dubai Mall Unit No. 4F - 04, Fashion Avenue Extention - Dubai',
        cuisines: JSON.stringify(['North Indian', 'South Indian', 'Indian - Chinese']),
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Curry Box Business Bay',
        verified: false,
        featured: false,
        country: 'United Arab Emirates',
        city: 'Dubai',
        address: 'Fairview Residency - Marasi Dr - Business Bay - Dubai',
        cuisines: JSON.stringify(['North Indian', 'Indian - Chinese']),
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Capri Italian Grill',
        verified: true,
        featured: false,
        country: 'United Arab Emirates',
        city: 'Dubai',
        address: 'Block B Trade Center Apartments - Sheikh Zayed Rd - Dubai',
        cuisines: JSON.stringify(['Italian', 'Italian - American']),
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PizzaExpress Live',
        verified: false,
        featured: false,
        country: 'United Arab Emirates',
        city: 'Dubai',
        address: 'Bay Square 5 - Business Bay - Dubai',
        cuisines: JSON.stringify(['Italian', 'Italian - American']),
        point: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
