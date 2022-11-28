const router = require('express').Router();
// const path = require('path');
const { Post, User } = require('../models');
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Post }],
        });
        const user = userData.get({ plain: true });
        res.render('profile', user);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;