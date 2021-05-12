const router = require('../../../node_modules/express').Router()


const {
  handlePopular,
  handleTrends,
  handleFeatured,
  handleNewInTown,
  handleCategoryBased,
  handleVisitAgain,
  handleMyList
} = require('../../controllers/v1/homeController')

router.get('/popular', handlePopular)
router.get('/trends', handleTrends)
router.get('/featured', handleFeatured)
router.get('/in-town', handleNewInTown)
router.get('/category-based', handleCategoryBased)

router.get('/visit-again', handleVisitAgain)
router.get('/my-list', handleMyList)

module.exports = router
