var express = require('express');
var router = express.Router();

// Routes for Version 1
// --------------------

const v1HomePageRoutes = require('./v1/homePage')
router.use('/v1', v1HomePageRoutes)

const v1MasterRoutes = require('./v1/masterRoutes')
router.use('/v1', v1MasterRoutes)

module.exports = router;