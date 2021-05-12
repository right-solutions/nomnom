const {
  handleOnSearch,
  handleOnPassByRestaurant,
  handleOnScanQRCode,
  handleOnOrderFirstTime,
  handleOnOrderXTime
} = require('../../services/restaurantService')

const handleOnSearch = async (req, res) => {
  let searchKeyword = 1 
  return getPopularRestaurants()
    .then(data => res.send(data))
    .catch(e => res.send({"error": "error occured while rendering handlePopular", details: e}))
}

module.exports = {
  handleOnSearch,
  handleOnPassByRestaurant,
  handleOnScanQRCode,
  handleOnOrderFirstTime,
  handleOnOrderXTime
}