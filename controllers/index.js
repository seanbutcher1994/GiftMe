const router = require('express').Router();

const homeRoutes = require('./home-routes');
const profileRoutes = require('./profile-routes.js');
const feedRoutes = require('./feed-routes.js')
const apiRoutes = require('./api');

router.use('/', homeRoutes);

router.use('/', profileRoutes);

router.use('/', feedRoutes);

router.use('/', apiRoutes);

module.exports = router;