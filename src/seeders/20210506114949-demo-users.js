'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('Users', [
    //   {
    //     firstName: 'Tom',
    //     lastName: 'Sawyer',
    //     email: 'tom@yopmail.com',
    //     gender: 'male',
    //     dateOfBirth: new Date(),
    //     country: 'United Arab Emirates',
    //     city: 'Dubai',
    //     mobileNumber: '0501298372',
    //     password: 'Password@1',
    //     language: 'English',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     firstName: 'Joe',
    //     lastName: 'Black',
    //     email: 'joe@yopmail.com',
    //     gender: 'male',
    //     dateOfBirth: new Date(),
    //     country: 'United Kingdom',
    //     city: 'London',
    //     mobileNumber: '14501298372',
    //     password: 'Password@1',
    //     language: 'English',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
