const router = require('express').Router();

const homeRoutes = require('./home-routes');
const profileRoutes = require('./profile-routes.js');
const feedRoutes = require('./feed-routes.js')
const apiRoutes = require('./api');

router.use('/', homeRoutes);

router.use('/profile', profileRoutes);

router.use('/feed', feedRoutes);

router.use('/api', apiRoutes);

module.exports = router;