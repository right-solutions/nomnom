'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
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
  }, {});
  Restaurant.associate = function(models) {
    // associations can be defined here
  };
  return Restaurant;
};