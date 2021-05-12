// const Promise = require('bluebird')
// const _ = require('lodash')
const models = require( '../models/index');

const getPopularRestaurants = () => {
  const query = {
    order: ['name'],
    attributes: ['name', 'country', 'city', 'address', 'cuisines', 'verified', 'featured', 'point', 'createdAt']
  }

  return models.Restaurant.findAll(query)
}

const getTrendingRestaurants = () => {
  const query = {
    order: ['name'],
    attributes: ['name', 'country', 'city', 'address', 'cuisines', 'verified', 'featured', 'point', 'createdAt']
  }

  return models.Restaurant.findAll(query)
}

const getFeaturedRestaurants = () => {
  const query = {
    order: ['name'],
    attributes: ['name', 'country', 'city', 'address', 'cuisines', 'verified', 'featured', 'point', 'createdAt']
  }

  return models.Restaurant.findAll(query)
}

const getNewRestaurants = () => {
  const query = {
    order: ['name'],
    attributes: ['name', 'country', 'city', 'address', 'cuisines', 'verified', 'featured', 'point', 'createdAt']
  }

  return models.Restaurant.findAll(query)
}

const getRestaurantsWithTopCategories = () => {
  const query = {
    order: ['name'],
    attributes: ['name', 'country', 'city', 'address', 'cuisines', 'verified', 'featured', 'point', 'createdAt']
  }

  return models.Restaurant.findAll(query)
}

const getVisitAgainResturants = () => {
  const query = {
    order: ['name'],
    attributes: ['name', 'country', 'city', 'address', 'cuisines', 'verified', 'featured', 'point', 'createdAt']
  }

  return models.Restaurant.findAll(query)
}

const getMyListResturants = () => {
  const query = {
    order: ['name'],
    attributes: ['name', 'country', 'city', 'address', 'cuisines', 'verified', 'featured', 'point', 'createdAt']
  }

  return models.Restaurant.findAll(query)
}

module.exports = {
  getPopularRestaurants,
  getTrendingRestaurants,
  getFeaturedRestaurants,
  getNewRestaurants,
  getRestaurantsWithTopCategories,
  getVisitAgainResturants,
  getMyListResturants,
}
