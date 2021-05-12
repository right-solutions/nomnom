'use strict';

const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
  }, {});
  
  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate(async user => {
    user.password = await user.generatePasswordHash(user.password)
  });
  
  User.prototype.generatePasswordHash = async function (password) {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
  };

  User.prototype.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
    
  return User;
};