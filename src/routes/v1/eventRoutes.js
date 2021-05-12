const router = require('express').Router()

const {
  handleOnSearch,
  handleOnPassByRestaurant,
  handleOnScanQRCode,
  handleOnOrderFirstTime,
  handleOnOrderXTime,
} = require('../../controllers/v1/eventsController')

router.get('/events/on_search', handleOnSearch)
router.get('/events/pass_by_restaurant', handleOnPassByRestaurant)
router.get('/events/scan_qr_code', handleOnScanQRCode)
router.get('/events/order_first_time', handleOnOrderFirstTime)
router.get('/events/order_x_time', handleOnOrderXTime)

module.exports = router
