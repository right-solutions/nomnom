const router = require('express').Router()


const {
  handleListAllCuisines
} = require('../../controllers/v1/mastersController')

router.get('/cuisines', handleListAllCuisines)

module.exports = router
