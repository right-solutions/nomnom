const {
  getPopularRestaurants,
  getTrendingRestaurants,
  getFeaturedRestaurants,
  getNewRestaurants,
  getRestaurantsWithTopCategories,
  getVisitAgainResturants,
  getMyListResturants,
} = require('../../services/restaurantService')

const handlePopular = async (req, res) => {
  return getPopularRestaurants()
    .then(data => res.send(data))
    .catch(e => res.send({"error": "error occured while rendering handlePopular", details: e}))
}

const handleTrends = async (req, res) => {
  return getTrendingRestaurants()
    .then(data => res.send(data))
    .catch(e => res.send({"error": "error occured while rendering handleTrends"}))
}

const handleFeatured = async (req, res) => {
  return getFeaturedRestaurants()
    .then(data => res.send(data))
    .catch(e => res.send({"error": "error occured while rendering handleFeatured"}))
}

const handleNewInTown = async (req, res) => {
  return getNewRestaurants()
    .then(data => res.send(data))
    .catch(e => res.send({"error": "error occured while rendering handleNewInTown"}))
}

const handleCategoryBased = async (req, res) => {
  return getRestaurantsWithTopCategories()
    .then(data => res.send(data))
    .catch(e => res.send({"error": "error occured while rendering handleCategoryBased"}))
}

const handleVisitAgain = async (req, res) => {
  return getVisitAgainResturants()
    .then(data => res.send(data))
    .catch(e => res.send({"error": "error occured while rendering handleVisitAgain"}))
}

const handleMyList = async (req, res) => {
  return getMyListResturants()
    .then(data => res.send(data))
    .catch(e => res.send({"error": "error occured while rendering handleMyList"}))
}

module.exports = {
  handlePopular,
  handleTrends,
  handleFeatured,
  handleCategoryBased,
  handleNewInTown,
  handleVisitAgain,
  handleMyList
}