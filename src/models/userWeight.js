'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const User = require('./User')
const Restaurant = require('./Restaurant')

module.exports = (sequelize, DataTypes) => {
  const UserWeight = sequelize.define('UserWeight', {
    weight: {
      type: Sequelize.DECIMAL, 
      required: true
    },
    
  }, {});
  
  UserWeight.beforeCreate(async user => {
    // 
  });

  UserWeight.associate = function (models) {
    
    // UserWeight.hasOne(models.user, {
    //   foreignKey: 'user_id',
    //   as: 'user'
    // });

    // UserWeight.hasOne(models.restaurant, {
    //   foreignKey: 'restaurant_id',
    //   as: 'restaurant'
    // });

    // UserWeight.hasMany(models.customer_query, {
    //   foreignKey: 'user_id',
    //   as: 'queryDetails'
    // });
  };

  return UserWeight;
};